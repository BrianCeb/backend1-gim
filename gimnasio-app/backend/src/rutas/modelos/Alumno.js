// modelos/Alumno.js
import mongoose from 'mongoose';

const alumnoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    dni: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    fechaPago: {
        type: Date,
        required: true,
    },
    fechaVencimiento: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

const Alumno = mongoose.model('Alumno', alumnoSchema);

export default Alumno;
