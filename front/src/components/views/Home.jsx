import NavBar from "./common/Navbar";
import Footer from "./common/Footer";
import { FaUserPlus } from 'react-icons/fa';
import heroImage from "../../assets/heroImage.jpg";

const Home = () => {
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
            Envía tu solicitud para crear una cuenta
          </p>
          <a
            href="#solicitud"
            className="px-6 py-2 text-blue-600 transition duration-300 bg-white rounded-full shadow-lg hover:bg-gray-100 animate-fadeIn"
          >
            Enviar Solicitud <FaUserPlus className="inline ml-2" />
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

      {/* Sección de Preguntas Frecuentes */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-semibold text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <details className="p-4 bg-gray-100 rounded-lg shadow-lg">
              <summary className="font-semibold">¿Cómo puedo crear una cuenta?</summary>
              <p className="mt-2">
                Para crear una cuenta, simplemente rellena el formulario de solicitud y uno de nuestros administradores revisará tu solicitud.
              </p>
            </details>
            <details className="p-4 bg-gray-100 rounded-lg shadow-lg">
              <summary className="font-semibold">¿Cuánto tiempo tarda en aprobarse una cuenta?</summary>
              <p className="mt-2">
                Normalmente, tu solicitud será revisada dentro de 24 a 48 horas.
              </p>
            </details>
            <details className="p-4 bg-gray-100 rounded-lg shadow-lg">
              <summary className="font-semibold">¿Qué puedo hacer si tengo problemas técnicos?</summary>
              <p className="mt-2">
                Puedes ponerte en contacto con nuestro equipo de soporte técnico a través de la plataforma, y recibirás asistencia personalizada.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Sección */}
      <section className="py-12 text-white bg-blue-600">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-semibold">¿Listo para comenzar?</h2>
          <p className="mb-8 text-lg">Solicita una cuenta hoy mismo y comienza a gestionar tu equipo con nuestra plataforma.</p>
          <a href="#solicitud" className="px-8 py-3 text-lg text-blue-600 bg-white rounded-full hover:bg-gray-200">
            Solicitar una cuenta
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
