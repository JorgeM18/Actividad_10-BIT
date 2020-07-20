const express = require('express');
const studentsControllers = require('../controllers/student.controllers');
const router = express.Router();

//Creating routes
router.get('/students', studentsControllers.getStudents);
router.post('/', studentsControllers.createStudent);
router.get('/students/:id', studentsControllers.getStudent);
router.put('/students/:id', studentsControllers.editStudent);
router.delete('/students/:id', studentsControllers.deleteStudent);

//Module creation
module.exports = router;