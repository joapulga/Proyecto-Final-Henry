import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext"; // Asegúrate de importar el contexto
import Swal from "sweetalert2"; // Importa SweetAlert2
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import Loading from "./common/Loading";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { loguinAuth } from "../service/authService";

const Login = () => {
  const { login, error } = useAuth(); // Importa la función de login y el error del contexto
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarLoading, setMostrarLoading] = useState(false);
  const { loginWithRedirect, user } = useAuth0();
  console.log(user);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Error en el inicio de sesión",
        text: error, // Mostrar el mensaje de error del contexto
      });
    }

    setMostrarLoading(true);
    const usauth = JSON.parse(localStorage.getItem("auth0"));

    loguinAuth({
      name: usauth.given_name,
      lastName: usauth.family_name,
      email: usauth.email,
    }).then((r) => {
      console.log(r);
    });
    setMostrarLoading(false);
  }, [error]); // Se ejecuta cuando cambia el valor de error

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setMostrarLoading(true);
      await login({ email, password });
      setMostrarLoading(false);
    } catch (err) {
      // No necesitas capturar el error aquí, ya que el AuthContext lo maneja
      console.error("Error en el login:", err);
    }
  };
  const redireccion = async () => {
    try {
      setMostrarLoading(true);
      await loginWithRedirect();
      localStorage.setItem("auth0", JSON.stringify(user));
      setMostrarLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Iniciar Sesión
          </h2>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Correo Electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Actualiza el estado del password
                />
              </div>
            </div>
            {mostrarLoading === true ? (
              <div className="flex justify-center ">
                <Loading></Loading>
              </div>
            ) : (
              <div>
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Iniciar Sesión
                </button>
              </div>
            )}
          </form>
          {mostrarLoading === true ? (
            <div className="flex justify-center">
              <Loading></Loading>
            </div>
          ) : (
            <button
              type="button"
              onClick={redireccion}
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Google
            </button>
          )}

          <div className="text-sm text-center">
            <a
              href="/"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              ¿No tienes cuenta? Regístrate
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
