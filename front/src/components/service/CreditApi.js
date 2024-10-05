import axios from "axios";

const apiURL = "http://localhost:3000";

export const createCredit = async (id,creditData) => {
  console.log(creditData);
  try {
    const response = await axios.post(apiURL + `/credit/${id}`, creditData);
    return response.data;
  } catch (error) {
    console.error("Error al crear el crédito:", error);
    throw error;
  }
};
