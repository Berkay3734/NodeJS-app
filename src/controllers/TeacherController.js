const teacher = require("../models/TeacherModel");
const teacherAdd = async(req,res) =>{
    try {
        const teacherAdd = new teacher(req.body);

        await teacherAdd.save().then((result)=>{
            console.log("öğretmen ekledi");
            return res.status(201).json(teacherAdd)
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
    teacherAdd
};