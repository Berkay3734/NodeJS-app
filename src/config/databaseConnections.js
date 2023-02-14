const mongoose = require("mongoose");
mongoose.set('strictQuery', true); // Veritabanında yalnızca modelinizde belirtilenleri depolamak istiyorsanız true
mongoose.connect(process.env.MONGO_Uri,{
    useNewUrlParser: true, //MongoDB bağlantı dizelerini ayrıştırmak için kullanılıyor
    useUnifiedTopology: true // sunucu bulma ve izleme
}).then(()=>{
    console.log("baglandi");
}).catch((err)=>{
    console.log("hata" + err);
})
