const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({path:'*/../config.env'});

const DB =process.env.DATABASE
mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false

}).then(()=>{
    console.log("Connection is sucessfull")
}).catch((e)=>{
    console.log("No Connection " +e)
}) 



// "mongodb://localhost:27017/students-api"