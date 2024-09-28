import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../service/authService";

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
    console.log(userData)
    try {
      await registerUser(userData).then((res) => {
        localStorage.setItem("user", JSON.stringify({ id: res.id, is_admin: res.is_admin }));
      });
      navigate("/login");
    } catch (error) {
      setError(error.message); // Guardar el mensaje de error
      console.error("Error en el registro:", error);
    }
  };

  const login = async (loginData) => {
    try {
      await loginUser(loginData).then((res) => {
        localStorage.setItem("user", JSON.stringify({ id: res.id, token: res.token, id_admin: res.is_admin }));
        if (res.is_admin) {
          navigate("/admin/dashboardadmin");
        }
        navigate("/");
      });
      // Redirige al usuario a la página de admin
    } catch (error) {
      setError(error.message); // Guarda el mensaje de error
      console.error("Error en el inicio de sesión:", error);
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
