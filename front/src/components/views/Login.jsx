import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext"; 
import Swal from "sweetalert2"; 
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import Loading from "./common/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import GoogleButton from "react-google-button";

const Login = () => {
  const { login, error, loguinAuth0 } = useAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarLoading, setMostrarLoading] = useState(false);
  const [emailError, setEmailError] = useState(""); // Estado para el error de email
  const [passwordError, setPasswordError] = useState(""); // Estado para el error de contraseña
  const [isFormValid, setIsFormValid] = useState(false); // Estado para controlar si el formulario es válido
  const { loginWithRedirect, user } = useAuth0();

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Error en el inicio de sesión",
        text: error,
      });
    }

    const usauth = JSON.parse(localStorage.getItem("auth0"));
    if (usauth) {
      response({
        name: usauth.given_name,
        lastname: usauth.family_name,
        email: usauth.email,
      });
    }
  }, [error]);

  const response = async (data) => {
    try {
      setMostrarLoading(1);
      await loguinAuth0(data);
      setMostrarLoading(0);
    } catch (error) {
      console.log(error);
    }
  };

  // Validación del email
  const validateEmail = (value) => {
    if (!value) {
      setEmailError("El correo es obligatorio");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("El correo no es válido");
    } else {
      setEmailError("");
    }
  };

  // Validación de la contraseña
  const validatePassword = (value) => {
    if (!value) {
      setPasswordError("La contraseña es obligatoria");
    } else if (value.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
    } else {
      setPasswordError("");
    }
  };

  // Efecto para verificar si el formulario es válido
  useEffect(() => {
    if (!emailError && !passwordError && email && password) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [emailError, passwordError, email, password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setMostrarLoading(true);
      await login({ email, password });
      setMostrarLoading(false);
    } catch (err) {
      console.error("Error en el login:", err);
    }
  };

  const redireccion = async () => {
    try {
      await loginWithRedirect();
      localStorage.setItem("auth0", JSON.stringify(user));
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value); // Validación en tiempo real
                  }}
                />
                {emailError && <p className="text-sm text-red-500">{emailError}</p>} {/* Mensaje de error */}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value); // Validación en tiempo real
                  }}
                />
                {passwordError && <p className="text-sm text-red-500">{passwordError}</p>} {/* Mensaje de error */}
              </div>
            </div>
            {mostrarLoading === true ? (
              <div className="flex justify-center">
                <Loading></Loading>
              </div>
            ) : (
              <div>
                <button
                  type="submit"
                  className={`relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    !isFormValid ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={!isFormValid} // Deshabilitar botón si el formulario no es válido
                >
                  Iniciar Sesión
                </button>
              </div>
            )}
          </form>
          {mostrarLoading === 1 ? (
            <div className="flex justify-center">
              <Loading></Loading>
            </div>
          ) : (
            <div className="flex justify-center">
              <GoogleButton
                type="light"
                label="Iniciar sesion con Google"
                onClick={redireccion}
                className="relative w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              />
            </div>
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
