const lesson = require("../models/LessonModel");
const lessonAdd = async(req,res) =>{
    try {
        const lessonAdd = new lesson(req.body);

        await lessonAdd.save().then(()=>{
            console.log("Ders ekledi");
            return res.status(201).json(lessonAdd)
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
    lessonAdd
};