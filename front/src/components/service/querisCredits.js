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
export const createCredit = async (id, creditData) => {
  try {
    const response = await axios.post(URL + `/credit/${id}`, creditData);
    return response.data;
  } catch (error) {
    console.error("Error al crear el crédito:", error);
    throw error;
  }
};

export const findCreditsById = async (userdId) => {
  try {
    const users = await axios.get(`${URL}/credit/${userdId}`);

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

export const getCreditDetailsById = async (creditId) => {
  try {
    const response = await axios.get(`${URL}/credit/${creditId}`);
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
export const paidShare = async (idCred) => {
  try {
    const response = await axios.get(URL + `/share/paid/${idCred}`);
    return response.data;
  } catch (e) {
    return e;
  }
};
