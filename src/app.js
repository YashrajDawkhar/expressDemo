const express = require("express");
const db = require("./db/Connection");
const PORT = process.env.PORT ;
const studentsRouter = require("./routers/students");



const app = express();
app.use(studentsRouter);



app.listen(PORT, () => {
    console.log(`connection is setup at ${PORT}`);
});
