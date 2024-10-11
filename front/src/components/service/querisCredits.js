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
      const response = await axios.get(`${URL}/credit/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
        
      });
      return response.data; 
    } catch (error) {
      console.error("Error obteniendo los créditos:", error);
    }
  };

  export const getCreditDetailsById = async (creditId) => {
    try {
      const response = await axios.get(`${URL}/credit/${creditId}`); // Ajusta la URL según tu API
      return response.data; // Asegúrate de que esto retorne el objeto correcto
  } catch (error) {
      console.error("Error obteniendo los detalles del crédito:", error);
      return null; // Devuelve null en caso de error
  }
  };