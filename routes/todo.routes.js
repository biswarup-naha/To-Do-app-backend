const {Router}=require('express');
const { getTodo, saveTodo,updateTodo,deleteTodo } = require('../controllers/todo.controller');
const router=Router();

router.get('/',getTodo)
router.post('/save',saveTodo)
router.put('/update',updateTodo)
router.delete('/delete',deleteTodo)

module.exports= router;