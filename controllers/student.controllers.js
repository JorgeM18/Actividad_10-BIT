const Student = require('../models/student.models');
const studentControllers = {
    //CRUD Methods
        //Get students method
    getStudents: async (req, res)=>{
        const students = await Student.find();
        res.send(students);
    },
        //Create student method
    createStudent: (req, res)=>{
        var studentData = req.body;
        var newStudent = new Student(studentData);
        newStudent.save((err, studentStore)=>{
            if (err){res.status(500).send({message: "There's been an error in the saving process"})};
            if (!studentStore){res.status(404).send({message: "Error: The student data is not valid"})};
            res.status(200).send({"message": `Student ${newStudent.nombre} has been saved correctly`});
        })    
    },

        //Get student method
    getStudent: async (req, res)=>{
        const {id} = req.params;
        const student = await Student.findById(id);
        res.send(student);
    },

        //Edit student method
    editStudent: async (req, res)=>{
        const {id} = req.params;
        var studentData = req.body;
        const student =  {
            nombre: studentData.nombre,
            apellido: studentData.apellido,
            edad: studentData.edad,
            correo: studentData.correo,
            direccion: studentData.direccion,
            telefono: studentData.telefono
        }
        await Student.findByIdAndUpdate(id, {$set: student}, {new: true});
        res.send({"message": `Student ${student.nombre} has been updated correctly`});
    },

        //Delete student method
    deleteStudent: async (req, res)=>{
        const {id} = req.params;
        await Student.findByIdAndRemove(id);
        res.send({"message": `Student deleted`});
    }
};

//Module creation
module.exports = studentControllers;