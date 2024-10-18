import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser, loguinAuth } from "../service/authService";
import { getUserDash } from "../service/querisUsers";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null); // Estado para errores
  const token = JSON.parse(localStorage.getItem("token"));
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

      if (res) {
        localStorage.setItem(
          "user",
          JSON.stringify({ id: res.id, is_admin: res.is_admin })
        );
        Swal.fire({
          icon: "success",
          title: "¡Registro exitoso!",
          text: "Tu cuenta ha sido creada correctamente.",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      navigate("/login");
    } catch (error) {
      setError(error.message); // Guardar el mensaje de error
      console.error("Error en el registro:", error);
    }
  };

  const login = async (loginData) => {
    try {
      await loginUser(loginData).then((r) => {
        localStorage.setItem("token", JSON.stringify(r.token));
        getUserDash(r.token).then((r) => {
          localStorage.setItem("user", JSON.stringify(r));
          setUser(r);
          if (r) {
            Swal.fire({
              icon: "success",
              title: "¡BIENVENIDO!",
              text: "Bienvenido, has iniciado sesión correctamente.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (r.is_admin !== true) {
            navigate("/user/dashboarduser");
          } else {
            navigate("/admin/dashboardadmin");
          }
          return { success: true };
        });
      });
    } catch (error) {
      setError(error.message);
      console.error("Error en el inicio de sesión:", error);
      return { success: false, message: error.message };
    }
  };
  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("auth0");
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const loguinAuth0 = async (data) => {
    await loguinAuth(data).then((r) => {
      localStorage.setItem("token", JSON.stringify(r.token));
      getUserDash(r.token).then((r) => {
        localStorage.setItem("user", JSON.stringify(r));
        setUser(r);
        if (r) {
          Swal.fire({
            icon: "success",
            title: "¡BIENVENIDO!",
            text: "Bienvenido, has iniciado sesión correctamente.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        if (r.is_admin !== true) {
          navigate("/user/dashboarduser");
        } else {
          navigate("/admin/dashboardadmin");
        }
        return { success: true };
      });
    });
  };

  const value = {
    user,
    token,
    register,
    login,
    logout,
    error,
    navigate,
    loguinAuth0,

    // Proporcionar el estado de error
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
