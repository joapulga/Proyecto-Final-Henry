import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useAuth } from "../Context/AuthContext";
import NavBar from "./common/Navbar";
import Footer from "./common/Footer";
import { FaUserPlus } from 'react-icons/fa';
import heroImage from "../../assets/heroImage.jpg";

const Home = () => {
  const { register, error } = useAuth(); // Añadir error del contexto

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    dni: "",
    phone: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <div
        className="flex items-center justify-center text-white bg-center bg-cover h-96"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="p-6 text-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="mb-4 text-5xl font-bold animate-fadeInDown">
            Bienvenido al Sistema de Gestión
          </h1>
          <p className="mb-6 text-lg animate-fadeInUp">
            Completa el formulario para crear una cuenta
          </p>
          <a
            href="#cuenta"
            className="px-6 py-2 text-blue-600 transition duration-300 bg-white rounded-full shadow-lg hover:bg-gray-100 animate-fadeIn"
          >
            Crear cuenta <FaUserPlus className="inline ml-2" />
          </a>
        </div>
      </div>

      {/* Solicitud de Usuario Section */}
      <section id="cuenta" className="flex-grow py-12 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-semibold text-center">Solicita tu cuenta</h2>

          {error && ( // Mostrar error si existe
            <div className="max-w-lg p-4 mx-auto mb-4 text-center text-white bg-red-500 rounded-lg">
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="max-w-lg p-8 mx-auto bg-white rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Nombre</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Apellido</label>
              <input
                type="text"
                name="lastname"
                onChange={handleChange}
                value={formData.lastname}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu apellido"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">DNI</label>
              <input
                type="number"
                name="dni"
                onChange={handleChange}
                value={formData.dni}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu DNI"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Número de Teléfono</label>
              <input
                type="number"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu número de teléfono"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Contraseña</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Dirección</label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={formData.address}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu dirección"
              />
            </div>
            <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Crear Cuenta
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
