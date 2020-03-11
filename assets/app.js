$(document).ready(function () {
    // Fetch todos
    $.getJSON('/api/todos').then(addTodos);

    // Listen for enter on input
    $('#todoInput').keypress(function (event) {
        if (event.which === 13) {
            event.preventDefault();

            // Extract todo & Save it
            var todoText = $('#todoInput').val();
            createTodo(todoText)

            // Clear it
            $('#todoInput').val('');
        }
    })
});

function createTodo(text) {
    $.post('/api/todos', { name: text }).then(function (newTodo) {
        addTodos([newTodo])
    })
}

function addTodos(todos) {
    todos.forEach(element => {
        var todoText = element.name;
        var id = element._id
        var li = $(`<li class="task" data-id="${id}">${todoText}</li>`)

        // Is it Done
        if (element.completed) {
            li.addClass('done');
        }

        $('.list').append(li);
    });
}