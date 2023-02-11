const mongoose = require("mongoose");
const lessonSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true, //Zorunlu
        trim:true, //Boşlukları görmezden gel
    }
},{timestamps:true});
const lesson = mongoose.model("lesson",lessonSchema);

module.exports = lesson;