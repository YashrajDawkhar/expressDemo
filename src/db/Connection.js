const mongoose = require("mongoose");
const DB ='mongodb+srv://Yashraj:Yash@567@cluster0.u5wg1.mongodb.net/MernStack?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false

}).then(()=>{
    console.log("Connection is sucessfull")
}).catch((e)=>{
    console.log("No Connection" +e)
}) 



// "mongodb://localhost:27017/students-api"