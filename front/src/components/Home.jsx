import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import Navbar from "./Navbar.jsx"
import Footer from './Footer.jsx';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center text-white bg-gradient-to-r from-blue-600 to-purple-600 h-96">
        <div className="text-center">
          <h1 className="mb-4 text-5xl font-bold">Bienvenido al Sistema de Gestión</h1>
          <p className="mb-6 text-lg">Envía tu solicitud para crear una cuenta</p>
          <a
            href="#solicitud"
            className="px-6 py-2 text-blue-600 transition duration-300 bg-white rounded-full shadow-lg hover:bg-gray-100"
          >
            Enviar Solicitud <FaUserPlus className="inline ml-2" />
          </a>
        </div>
      </div>

      <section id="solicitud" className="flex-grow py-12 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-semibold text-center">Solicita tu cuenta</h2>
          <form className="max-w-lg p-8 mx-auto bg-white rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Nombre Completo</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu nombre completo"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Contraseña</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Mensaje</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe un mensaje para el administrador"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
