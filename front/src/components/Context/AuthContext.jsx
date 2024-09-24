import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../service/authService";  // Importar las funciones

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Función para manejar el registro
  const register = async (userData) => {
    try {
      const data = await registerUser(userData); // Usar la función del authService
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/login");
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  // Función para manejar el inicio de sesión
  const login = async (loginData) => {
    try {
      const data = await loginUser(loginData); // Usar la función del authService
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (error) {
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
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
