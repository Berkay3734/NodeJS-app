const express = require('express'); //express programın içine katıyoruz global değil bu dosya için geçerlidir
const app = express(); //app değişkenine atıyoruz
require("dotenv").config(); //.env deki verileri kullanmamızı sağlar
require("./src/config/databaseConnections"); // connectionString için
const port = process.env.PORT || 5001; //.env de tanımladığım 5000 portu çalışmazsa 5001 bağlan diyorum

const Student = require('./src/models/TodoModel');  //database verilerini burdan çekiyorum
const Lesson = require('./src/models/LessonModel');
const Teacher = require('./src/models/TeacherModel');

const todoRouter = require("./src/routers/TodoRouters"); //router dosyasındaki verileri çekiyoruz
const teacherRouter = require("./src/routers/TeacherRouter");
const lessonRouter = require("./src/routers/LessonRouter");

app.use(express.static('public')); //css kullanabilmemiz için public tanımlamamız gerekiyor.
app.use("/css",express.static(__dirname+'public/css')); //_dirname o esnada icra edilen dosyanın kök dizine olan yolunu belirtir.
app.set('view engine','ejs'); //ejs kullanabilmemiz için view engine bizim view klasörünü bulduğu için sendfile demek yerine render kullanıyoruz
app.use(express.urlencoded({extended:true})); // Ara katman oluşturduk. extend true ile iç içe nesne gönderebilirir.

app.use("/api",todoRouter); //postman de get,pull yapabilmek için link yolu sonuna /api ile sorgu yapabiliyoruz
app.use("/api",teacherRouter);
app.use("/api",lessonRouter);

app.get("/",(req,res)=>{ //anasayfa getirir
    res.render('index');  //ejs ile render kullandık. yoksa sendFile diyip dosya yolu belirtmemiz gerekecekti
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
    res.redirect('/'); // /index çağırılırsa eğer / ile değiştir bu sayede anasayfa dönüyor
});
app.get("/student",(req,res)=>{
    Student.find().then((result)=>{ 
        res.render('student',{result}) //veri tabanından verileri bulup html sayfasına result değişkeni ile yolluyoruz
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
    ogrenci.save().then((result)=>{ //ogrenci eklemek için
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