const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')

// Get request on root route of todos/ go to todosController and use the getTodos method
router.get('/', todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router