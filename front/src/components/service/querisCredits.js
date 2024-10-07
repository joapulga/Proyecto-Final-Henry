import axios from "axios";

const URL = "http://localhost:3000";

export const findAllCredits = async () => {
    try {
      const users = await axios.get(URL + "/credit");
      return users.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const findCreditsById = async (userdId) => {
    try {
      const users = await axios.get(`${URL}/credit/${userdId}`)
      return users.data
    } catch (error) {
      console.error("Error en la devolucion de creditos" ,error)
    }

  }

export const getCreditsByUserId = async (userId, token) => {
  try {
    const response = await axios.get(`${URL}/credit`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
      params: {
        userId: userId, 
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Error obteniendo los créditos:", error);
  }
};
