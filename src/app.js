const express = require("express");

const db = require("./db/Connection");
const port = process.env.PORT || 4000;
const studentsRouter = require("./routers/students");


const app = express();
app.use(studentsRouter);



app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});
