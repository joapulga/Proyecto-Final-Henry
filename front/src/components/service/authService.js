import axios from 'axios';

const apiURL = "http://localhost:3000";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${apiURL}/auth/signup`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; // Devuelve los datos de respuesta en caso de éxito
  } catch (error) {
    // Manejo de errores
    if (error.response) {
      // La solicitud se realizó y el servidor respondió con un código de estado que no está en el rango de 2xx
      throw new Error(error.response.data.message || "Error al crear el usuario");
    } else if (error.request) {
      // La solicitud se realizó pero no se recibió respuesta
      throw new Error("No se recibió respuesta del servidor");
    } else {
      // Algo ocurrió al configurar la solicitud
      throw new Error(error.message);
    }
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${apiURL}/auth/login`, loginData, {
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
      throw new Error(error.message);
    }
  }
};
