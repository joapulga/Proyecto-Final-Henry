import axios from "axios";

const URL = "http://localhost:3000";

export const findAllUsers = async () => {
  try {
    const response = await axios.get(URL + "/user");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo usuarios:", error);
    throw error;
  }
};

export const createPhoto = async (photoData) => {
  
  try {
    const response = await axios.post(URL + "/file-upload", photoData, {
      headers: {
        "Content-Type": "multipart/form-data", // Especifica que se está enviando un archivo
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error obteniendo usuarios:", error);
    throw error;
  }
};


export const findUserByID = async (id) => {
  try {
    const users = await axios.get(URL + `/user/${id}`);
    return users.data;
  } catch (error) {
    console.log(error);
  }
};

export const createAdmin = async (id) => {
  try {
    const userAdmin = await axios.post(URL + `/user/${id}/becomeAdmin`);
    return userAdmin;
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = async (userId) => {
  try {
    const response = await axios.get(`${URL}/user/${userId}`);
    return response.data; // Retorna los datos del usuario
  } catch (error) {
    console.error("Error obteniendo los datos del usuario:", error);
    throw error; // Lanza el error para que pueda ser manejado en el componente
  }
};
export const getUserDash = async (token) => {
  try {
    const response = await axios.get(`${URL}/user/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Retorna los datos del usuario
  } catch (error) {
    console.error("Error obteniendo los datos del usuario:", error);
    throw error; // Lanza el error para que pueda ser manejado en el componente
  }
};

export const uploadProfileImage = async (userId, selectedFile) => {
  const formData = new FormData();
  formData.append("image", selectedFile);

  try {
    const response = await axios.post(`${URL}/user/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw error;
  }
};
