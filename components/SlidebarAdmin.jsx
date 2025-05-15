import React from 'react';

const SidebarAdmin = () => {
    return (
        <aside className="bg-gray-100 p-4 w-64 h-screen shadow-md">
            <h2 className="text-lg font-semibold mb-4">Panel Admin</h2>
            <ul className="space-y-2">
                <li><a href="/admin" className="text-blue-600 hover:underline">Dashboard</a></li>
                <li><a href="/alumnos" className="text-blue-600 hover:underline">Gestionar Alumnos</a></li>
                <li><a href="/ingresos" className="text-blue-600 hover:underline">Registrar Ingresos</a></li>
                <li><a href="/pagos" className="text-blue-600 hover:underline">Control de Pagos</a></li>
            </ul>
        </aside>
    );
};

export default SidebarAdmin;