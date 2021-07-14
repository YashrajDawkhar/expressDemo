const express = require("express");
const db = require("./db/Connection");
const port = process.env.PORT || 4000;
const studentsRouter = require("./routers/students");

const app = express();
app.use(studentsRouter);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next(); // Important
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});
