import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">GimnasioApp</h1>
                <ul className="flex gap-4">
                    <li><a href="/" className="hover:underline">Inicio</a></li>
                    <li><a href="/alumnos" className="hover:underline">Alumnos</a></li>
                    <li><a href="/ingresos" className="hover:underline">Ingresos</a></li>
                    <li><a href="/pagos" className="hover:underline">Pagos</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;