const express = require("express");
const db = require("./db/Connection");
const port = process.env.PORT || 4000;
const studentsRouter = require("./routers/students");
var cors = require('cors')

const app = express();
app.use(studentsRouter);

app.use(cors())

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});
