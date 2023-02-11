const express = require('express');
const app = express();
require("dotenv").config();
require("./src/config/databaseConnections");
const port = process.env.PORT || 5001;

const Student = require('./src/models/TodoModel');  //database verilerini burdan çekiyorum
const Lesson = require('./src/models/LessonModel');
const Teacher = require('./src/models/TeacherModel');

const todoRouter = require("./src/routers/TodoRouters");
const teacherRouter = require("./src/routers/TeacherRouter");
const lessonRouter = require("./src/routers/LessonRouter");

app.use(express.static('public'));
app.use("/css",express.static(__dirname+'public/css'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true})); // Ara katman oluşturduk. extend true ile iç içe nesne gönderebilirir.

app.use("/api",todoRouter);
app.use("/api",teacherRouter);
app.use("/api",lessonRouter);

app.get("/",(req,res)=>{
    res.render('index');
});
app.get("/add",(req,res)=>{
    res.render('add');
});
app.get("/addteacher",(req,res)=>{
    res.render('addteacher');
});
app.get("/addlesson",(req,res)=>{
    res.render('addlesson');
});

app.get("/index",(req,res)=>{ //Diğer sayfalardan Anasayfaya dönmek için 
    res.redirect('/');
});
app.get("/student",(req,res)=>{
    Student.find().then((result)=>{
        res.render('student',{result})
    })
});
app.get("/teacher",(req,res)=>{
    Teacher.find().then((result)=>{
        res.render('teacher',{result})
    })
});
app.get("/lesson",(req,res)=>{
    Lesson.find().then((result)=>{
        res.render('lesson',{result})
    })
});


app.post('/add',(req,res)=>{
    const ogrenci = new Student(req.body);
    ogrenci.save().then((result)=>{
        res.redirect('/student');
    }).catch((err)=>{
        console.log(err);
    })
});

app.post('/addteacher',(req,res)=>{
    const ogretmen = new Teacher(req.body);
    ogretmen.save().then((result)=>{
        res.redirect('/teacher');
    }).catch((err)=>{
        console.log(err);
    })
});

app.post('/addlesson',(req,res)=>{
    const ders = new Lesson(req.body);
    ders.save().then((result)=>{
        res.redirect('/lesson');
    }).catch((err)=>{
        console.log(err);
    })
});

// app.delete('/delete/:id',(req,res)=>{
//     const id = req.params.id
//     Student.findByIdAndDelete(id).then((result)=>{
//         res.json({link:'/student'})
//     }).catch((err)=>{
//         console.log(err);
//     })
// })
app.listen(port, () => {
    console.log(`Server Started at ${port}`);
})