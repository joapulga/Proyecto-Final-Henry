import axios from "axios";

const URL = "http://localhost:3000";

//USERS
export const findAllUsers = async () => {
  try {
    const users = await axios.get(URL + "/user");
    return users;
  } catch (error) {
    console.log(error);
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
