import axios from "axios";

const URL = "http://localhost:3000";

export const findAllUsers = async () => {
  try {
    const response = await axios.get(URL + "/user");
    return response.data; 
  } catch (error) {
    console.error('Error obteniendo usuarios:', error);
    throw error; 
  }
};


export const findOneUser = async () => {
  try {
    const users = await axios.get(URL + "/credit");
    return users;
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
    console.error('Error obteniendo los datos del usuario:', error);
    throw error; // Lanza el error para que pueda ser manejado en el componente
  }
};
