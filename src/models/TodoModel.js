const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
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
    }
},{timestamps:true});
const todo = mongoose.model("Student",todoSchema); //Student ile app den ulaşacağız

module.exports = todo;