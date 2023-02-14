const lesson = require("../models/LessonModel");
const lessonAdd = async(req,res) =>{
    try {
        const lessonAdd = new lesson(req.body); //req.body http isteğinin vücut kısmı. Bize gönderilen yanıtın body si

        await lessonAdd.save().then(()=>{
            console.log("Ders ekledi");
            return res.status(201).json(lessonAdd) //201 Sunucu tarafından isteğin yerine getirildiği ve yeni bir kaynak oluşturulduğu anlamına gelir
        })
        .catch ((err) => {
            return res.status(400).json({ //400 gönderilen isteğin hatalı olduğunu belirten durum kodudur.
                succes:false,
                message:"Başka hata" + err
            })
        })
    } catch (error) {
        return res.status(500).json({ //500 sunucu taraflı problemlerin tarayıcılar aracılığıyla kullanıcıya iletilen mesajlardır
            succes:false,
            message:"Kayıt hatası"
        });
    }
};
module.exports = {
    lessonAdd
};