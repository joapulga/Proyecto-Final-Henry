import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-bold text-white">
            MiSistema
          </div>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="text-white transition duration-300 hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#solicitud" className="text-white transition duration-300 hover:text-gray-300">
                Solicitar Cuenta
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white transition duration-300 hover:text-gray-300">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
