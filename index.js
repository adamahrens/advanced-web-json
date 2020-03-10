var express = require('express');
app = express();

// Routes
app.get('/', function(request, response){
    response.send('Hello World')
})

// Start
app.listen(3001, function(){
    console.log('express app running at http://localhost:3001')
})