import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useAuth } from "../Context/AuthContext";
import NavBar from "./common/Navbar";
import Footer from "./common/Footer";
import { FaUserPlus } from 'react-icons/fa';
import heroImage from "../../assets/heroImage.jpg";

const Home = () => {
  const { register } = useAuth(); // Obtener la función de registro del contexto

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

  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData); // Llamar a la función de registro
    navigate('/login');
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

      {/* Sección de Características */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-semibold text-center">Características del Sistema</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-bold">Gestión de Usuarios</h3>
              <p>
                Administra fácilmente las cuentas de usuarios, con opciones para crear, editar y eliminar usuarios.
              </p>
            </div>
            <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-bold">Relevamientos Técnicos</h3>
              <p>
                Realiza y gestiona relevamientos técnicos en tiempo real, con reportes detallados.
              </p>
            </div>
            <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-bold">Soporte Técnico</h3>
              <p>
                Solicita y recibe soporte técnico especializado cuando lo necesites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-12 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-semibold text-center">Lo que dicen nuestros usuarios</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 text-center bg-white rounded-lg shadow-lg">
              <p className="mb-4 italic">"Este sistema ha mejorado la gestión de nuestro equipo en un 100%. ¡Altamente recomendado!"</p>
              <h3 className="text-lg font-bold">Juan Pérez</h3>
              <p className="text-sm text-gray-500">Administrador de Empresa</p>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-lg">
              <p className="mb-4 italic">"Muy fácil de usar, ha simplificado todas nuestras tareas diarias."</p>
              <h3 className="text-lg font-bold">María González</h3>
              <p className="text-sm text-gray-500">Técnica Especialista</p>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-lg">
              <p className="mb-4 italic">"El soporte técnico es excelente y siempre están dispuestos a ayudar."</p>
              <h3 className="text-lg font-bold">Carlos Ramírez</h3>
              <p className="text-sm text-gray-500">Usuario</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solicitud de Usuario Section */}
      <section id="cuenta" className="flex-grow py-12 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-semibold text-center">Solicita tu cuenta</h2>

          <form onSubmit={handleSubmit} className="max-w-lg p-8 mx-auto bg-white rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Nombre</label>
              <input
                type="text"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Apellido</label>
              <input
                type="text"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu apellido"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">DNI</label>
              <input
                type="number"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu DNI"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Numero de telefono</label>
              <input
                type="number"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu numero de telefono"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Contraseña</label>
              <input
                type="password"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Ubicación</label>
              <input
                type="text"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu ubicación"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Enviar registro
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
