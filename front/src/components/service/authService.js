import axios from "axios";

const apiURL = import.meta.env.VITE_APP_URL;

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${apiURL}/auth/signup`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
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
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Error al iniciar sesión");
    } else if (error.request) {
      throw new Error("No se recibió respuesta del servidor");
    } else {
      throw new Error("Error: " + error.message);
    }
  }
};

export const loguinAuth = async (loguinAuth0) => {
  try {
    const response = await axios.post(`${apiURL}/auth/login`, loguinAuth0, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Error al iniciar sesión");
    } else if (error.request) {
      throw new Error("No se recibió respuesta del servidor");
    } else {
      throw new Error("Error: " + error.message);
    }
  }
};
