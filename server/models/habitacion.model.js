const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HabitacionSchema = new Schema({
    numero: {
        type: Number,
        required: [true, 'El numero de habitacion es requerido'],
        unique: [true, 'El numero de habitacion ya existe']
    },

    tipo: {
        type: String,
        required:[true, 'El tipo de habitacion es requerido']
    },

    descripcion:{
        type: String
    }
    // Otros campos según tus necesidades
});

module.exports = mongoose.model('Habitacion', HabitacionSchema)