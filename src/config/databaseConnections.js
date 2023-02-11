const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_Uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("baglandi");
}).catch((err)=>{
    console.log("hata" + err);
})
