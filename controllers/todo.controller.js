const todoModel=require('../models/todo.model')

module.exports.getTodo=async (req,res)=>{
    const todo=await todoModel.find()
    res.send(todo)
}

module.exports.saveTodo=async (req,res)=>{
    const {text}=req.body;
    todoModel
    .create({text})
    .then((data)=>{
        console.log("data added successfully...")
        res.send(data)
    })
    .catch((err)=>console.log(err))
}