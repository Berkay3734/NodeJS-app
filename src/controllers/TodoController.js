const todo = require("../models/TodoModel");
const todoAdd = async(req,res) =>{
    try {
        const todoAdd = new todo(req.body);

        await todoAdd.save().then((result)=>{
            console.log("ekledi");
            return res.status(201).json(todoAdd)
        })
        .catch ((err) => {
            return res.status(400).json({
                succes:false,
                message:"Başka hata" + err
            })
        })
    } catch (error) {
        return res.status(500).json({
            succes:false,
            message:"Kayıt hatası"
        });
    }
};
module.exports = {
    todoAdd
};