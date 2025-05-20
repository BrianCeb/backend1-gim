// servidor.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import alumnosRouter from './src/rutas/alumnos.rutas.js';


conectarDB();

dotenv.config(); // Cargar variables de entorno

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch((err) => console.error('❌ Error de conexión a MongoDB:', err));

app.use(express.json());
app.use('/api/alumnos', alumnosRouter);

// Servir archivos estáticos del frontend (si lo tenés)
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
