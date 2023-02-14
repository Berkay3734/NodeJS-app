const mongoose = require("mongoose");
const lessonSchema = new mongoose.Schema({ //Şema oluşturuyoruz. 
    name:{
        type:String,
        required: true, //Zorunlu
        trim:true, //Boşlukları görmezden gel
    }
},{timestamps:true}); //kayıt tarihi
const lesson = mongoose.model("lesson",lessonSchema); //geliştirilen uygulamaya göre model oluşturarak MongoDB işlemlerini kolaylaştıran bir ODM modülüdür

module.exports = lesson;

//ODM = tasarımı ürün özelliklerine göre oluşturur