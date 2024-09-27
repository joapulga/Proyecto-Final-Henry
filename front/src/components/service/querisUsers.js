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
