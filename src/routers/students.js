const express = require("express");
const Student = require("../models/students");
const router =  new express.Router();
router.use(express.json());
//Create a new student

// router.post("/students",(req,res)=>{

//     console.log(req.body)

//     const user = new Student(req.body)
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })

// })

router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const userData = await user.save();
        res.status(201).send(userData);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        res.send(studentData);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.patch("/students/:id",async (req,res)=>{
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id ,req.body ,{new :true}) ;
        res.status(404).send(updateStudent);
    } catch (error) {
        res.send(error);
    }
})

router.delete("/students/:id",async(req,res)=>{
    try {
        const id = req.params.id ;
        const deleteStudent = await Student.findByIdAndDelete(id);
        if (!id) {
            return res.status(400).send();
        } 

        res.send(deleteStudent);
    } catch (error) {
        res.send(error);
    }
})


module.exports=router;