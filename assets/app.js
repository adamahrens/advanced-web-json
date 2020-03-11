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

    // Listen for clicks on todos
    $('.list').on('click', 'li', function () {
        var todoId = $(this).attr('data-id');
        var status = $(this).attr('data-complete')
        var toggled = !$.parseJSON(status)
        var path = '/api/todos/' + todoId
        var li = $(this)

        $.ajax({
            url: path,
            type: 'PUT',
            data: { completed: toggled },
            success: function (updatedTodo) {
                // Do something with the result
                $(li).toggleClass('done')
                console.log(updatedTodo);
            }
        });
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
        var complete = element.completed
        var li = $(`<li class="task" data-id="${id}" data-complete="${complete}">${todoText}</li>`)

        // Is it Done
        if (element.completed) {
            li.addClass('done');
        }

        $('.list').append(li);
    });
}