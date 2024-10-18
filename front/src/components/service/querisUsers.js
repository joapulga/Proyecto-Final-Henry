import axios from "axios";

const URL = import.meta.env.VITE_APP_URL;

export const findAllUsers = async (token) => {
  try {
    const response = await axios.get(URL + "/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error obteniendo usuarios:", error);
    throw error;
  }
};

export const createPhoto = async (userId, photoData,token) => {
  try {
    const response = await axios.post(
      `${URL}/user/update-photo/${userId}`,
      photoData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error obteniendo usuarios:", error);
    throw error;
  }
};

export const findUserByID = async (id, token) => {
  try {
    const users = await axios.get(URL + `/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return users.data;
  } catch (error) {
    console.log(error);
  }
};

export const createAdmin = async (id, token) => {
  try {
    const userAdmin = await axios.post(URL + `/user/${id}/becomeAdmin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return userAdmin;
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = async (userId, token) => {
  try {
    const response = await axios.get(`${URL}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error obteniendo los datos del usuario:", error);
    throw error;
  }
};
export const getUserDash = async (token) => {
  try {
    const response = await axios.get(`${URL}/user/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error obteniendo los datos del usuario:", error);
    throw error;
  }
};
