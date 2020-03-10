var express = require('express');
var router = express.Router();
var db = require('../models')

// Todo Routes
router.get('/', function(request, response) {
    response.json({ api: 'v1' })
})

router.get('/todos', function(request, response) {
    db.Todo.find().then(function(todos){
        response.json(todos)
    }).catch(function(error){
        response.send(error)
    })
})

router.post('/todos', function(request, response) {
    db.Todo.create(request.body).then(function(todo) {
        console.log('--------------')
        console.log('Created ' + todo)
        console.log('--------------')
        response.status(201).json(todo)
    }).catch(function(error) {
        response.send(error)
    })
})

module.exports = router