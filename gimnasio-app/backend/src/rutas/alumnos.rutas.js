// rutas/alumnos.rutas.js
import express from 'express';
import Alumno from './modelos/Alumno.js';

const router = express.Router();

// Crear alumno
router.post('/', async (req, res) => {
    try {
        const { nombre, apellido, dni, email, fechaPago } = req.body;

        const fechaPagoDate = new Date(fechaPago);
        const fechaVencimiento = new Date(fechaPagoDate);
        fechaVencimiento.setDate(fechaPagoDate.getDate() + 30);

        const nuevoAlumno = new Alumno({
            nombre,
            apellido,
            dni,
            email,
            fechaPago: fechaPagoDate,
            fechaVencimiento,
        });

        await nuevoAlumno.save();
        res.status(201).json(nuevoAlumno);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear alumno', detalle: error.message });
    }
});

// Obtener todos los alumnos
router.get('/', async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener alumnos' });
    }
});

// Buscar alumno por DNI
router.get('/dni/:dni', async (req, res) => {
    try {
        const alumno = await Alumno.findOne({ dni: req.params.dni });
        if (!alumno) {
            return res.status(404).json({ error: 'Alumno no encontrado' });
        }
        res.json(alumno);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar alumno' });
    }
});

export default router;
