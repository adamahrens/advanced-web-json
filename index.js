var express = require('express');
var bodyParser = require('body-parser')
app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Routes
var todoRoutes = require('./routes/todos')
app.use('/api', todoRoutes);


app.get('/', function(request, response) {
    response.send('Hello World')
})

app.get('/json', function(request, response) {
    response.json({ hello: 'World', good: 'Evening', names: ['Leroy', 'Jenkins']})
})

// Start
app.listen(3001, function(){
    console.log('express app running at http://localhost:3001')
})