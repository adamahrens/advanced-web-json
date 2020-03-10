const mongoose = require('mongoose');
const schema = new mongoose.Schema({ name: { type: String, required: 'Name cant be blank' }, completed: { type: Boolean, default: false }, created: { type: Date, default: Date.now} });
const Todo = mongoose.model('Todo', schema);
module.exports = Todo