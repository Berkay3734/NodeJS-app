const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true, //Zorunlu
        trim:true, //Boşlukları görmezden gel
    },
    surname:{
        type:String,
        required:true,
        trim:true,
    },
    gender:{
        type:Boolean,
        default:false,
    },
    lessonCode:{
        type:String,
        required:true,
    }
},{timestamps:true});
const teacher = mongoose.model("Teacher",teacherSchema);

module.exports = teacher;