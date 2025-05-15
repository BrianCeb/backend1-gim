import React, { useState } from 'react';
import SidebarAdmin from '../components/SidebarAdmin';
import AlumnoForm from '../components/AlumnoForm';
import AlumnosList from '../components/AlumnosList';
import AvisoPago from '../components/AvisoPago';

const AlumnosPage = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [editingAlumno, setEditingAlumno] = useState(null);

    const handleAgregarAlumno = (alumno) => {
        if (editingAlumno) {
            setAlumnos(prev => prev.map(a => a === editingAlumno ? alumno : a));
            setEditingAlumno(null);
        } else {
            setAlumnos([...alumnos, alumno]);
        }
    };

    const handleEditarAlumno = (alumno) => {
        setEditingAlumno(alumno);
    };

    const handleEliminarAlumno = (alumno) => {
        if (confirm(`¿Seguro que deseas eliminar a ${alumno.nombre}?`)) {
            setAlumnos(alumnos.filter(a => a !== alumno));
        }
    };

    return (
        <div className="flex">
            <SidebarAdmin />
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-4">Gestión de Alumnos</h1>
                <AvisoPago alumnos={alumnos} />
                <AlumnoForm onSubmit={handleAgregarAlumno} editingAlumno={editingAlumno} />
                <AlumnosList alumnos={alumnos} onEdit={handleEditarAlumno} onDelete={handleEliminarAlumno} />
            </main>
        </div>
    );
};

export default AlumnosPage;
