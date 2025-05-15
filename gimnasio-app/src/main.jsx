import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './gimnasio-app/components/NavBar';
import AlumnosPage from './gimnasio-app/pages/AlumnosPage';
import IngresosPage from './gimnasio-app/pages/IngresosPage';

const App = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<h1 className="p-4 text-2xl">Inicio</h1>} />
            <Route path="/alumnos" element={<AlumnosPage />} />
            <Route path="/ingresos" element={<IngresosPage />} />
            <Route path="/pagos" element={<h1 className="p-4 text-2xl">Próximamente Pagos</h1>} />
            <Route path="*" element={<h1 className="p-4 text-red-500">404 - Página no encontrada</h1>} />
        </Routes>
    </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
