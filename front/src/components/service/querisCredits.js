import axios from "axios";

const URL = import.meta.env.VITE_APP_URL;

export const findAllCredits = async (token) => {
  try {
    const users = await axios.get(URL + "/credit",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return users.data;
  } catch (error) {
    console.log(error);
  }
};
export const createCredit = async (id, creditData,token) => {
  try {
    const response = await axios.post(URL + `/credit/${id}`, creditData,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear el crédito:", error);
    throw error;
  }
};

export const findCreditsById = async (userdId,token) => {
  try {
    const users = await axios.get(`${URL}/credit/${userdId}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return users.data;
  } catch (error) {
    console.error("Error en la devolucion de creditos", error);
  }
};
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

export const getCreditDetailsById = async (creditId,token) => {
  try {
    const response = await axios.get(`${URL}/credit/${creditId}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error obteniendo los detalles del crédito:", error);
    return null;
  }
};

export const paidMp = async (datePaid) => {
  const response = await axios.post(URL + "/payment/create", datePaid);
  return response.data;
};
export const paidShare = async (idCred,token) => {
  try {
    const response = await axios.get(URL + `/share/paid/${idCred}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
