import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../service/authService";
import { getUserDash } from "../service/querisUsers";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null); // Estado para errores
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user"); // Obtén el valor sin parsear primero
    if (storedUser) {
      // Solo intenta parsear si existe
      try {
        const user = JSON.parse(storedUser) || [];
        setUser(user);
      } catch (error) {
        console.error("Error al parsear el usuario del localStorage:", error);
        // Opcional: limpiar el localStorage si hay un error de parseo
        localStorage.removeItem("user");
      }
    }
  }, []);

  const register = async (userData) => {
    setError(null); // Reiniciar el estado de error al intentar de nuevo
    try {
      const res = await registerUser(userData);
      localStorage.setItem("user", JSON.stringify({ id: res.id, is_admin: res.is_admin }));
      if (res) {
        Swal.fire({
          icon: "success",
          title: "¡Registro exitoso!",
          text: "Tu cuenta ha sido creada correctamente.",
          showConfirmButton: false,
          timer: 1500,
        });
       // navigate("/login");
      }
    } catch (error) {
      setError(error.message); // Guardar el mensaje de error
      console.error("Error en el registro:", error);
    }
  };

  const login = async (loginData) => {
    try {
      const res = await loginUser(loginData);
      const data = await getUserDash(res.token);
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      if (data.is_admin !== true) {
        navigate("/");
      } else {
        navigate("/");
      }
      return { success: true };
    } catch (error) {
      setError(error.message);
      console.error("Error en el inicio de sesión:", error);
      return { success: false, message: error.message }; 
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const value = {
    user,
    register,
    login,
    logout,
    error, // Proporcionar el estado de error
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
