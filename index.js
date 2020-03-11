var express = require('express');
var bodyParser = require('body-parser')
var axios = require('axios');
app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/assets'))

// Routes
var todoRoutes = require('./routes/todos')
app.use('/api', todoRoutes);

app.get('/', function (request, response) {
    response.sendFile('index.html')
})

// Start
app.listen(3001, function () {
    console.log('express app running at http://localhost:3001')
})