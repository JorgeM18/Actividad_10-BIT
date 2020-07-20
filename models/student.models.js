const mongoose = require('mongoose');
const {Schema} = mongoose;

const studentSchema = new Schema({
    nombre: {type: String},
    apellido: {type: String},
    edad: {type: Number},
    correo: {type: String},
    direccion: {type: String},
    telefono: {type: Number}
});

//Module creation
module.exports = mongoose.model('estudiantes', studentSchema);