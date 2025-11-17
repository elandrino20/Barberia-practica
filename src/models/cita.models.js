const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },

    apellido: {
        type: String,
        required: true,
        trim: true
    },

    correo: {
        type: String,
        required: true,
        trim: true
    },

    telefono: {
        type: String,
        required: true,
        trim: true
    },

    fecha: {
        type: String,
        required: true
    },

    hora: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Cita', citaSchema);
