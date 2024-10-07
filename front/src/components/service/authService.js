import axios from "axios";

const apiURL = "http://localhost:3000";

export const registerUser = async (userData) => {
  console.log(userData);
  try {
    const response = await axios.post(`${apiURL}/auth/signup`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response.data; // Devuelve los datos de respuesta en caso de éxito
  } catch (error) {
    // Manejo de errores
    if (error.response) {
      throw new Error(
        error.response.data.message || "Error al crear el usuario"
      );
    } else if (error.request) {
      throw new Error("No se recibió respuesta del servidor");
    } else {
      throw new Error("Error: " + error);
    }
  }
};

export const loginUser = async (loginData) => {
  
  try {
    const response = await axios.post(`${apiURL}/auth/signin`, loginData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Devuelve los datos de respuesta en caso de éxito
  } catch (error) {
    // Manejo de errores
    if (error.response) {
      throw new Error(error.response.data.message || "Error al iniciar sesión");
    } else if (error.request) {
      throw new Error("No se recibió respuesta del servidor");
    } else {
      throw new Error("Error: " + error.message);
    }
  }
};
