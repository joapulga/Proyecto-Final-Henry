import axios from "axios"

const URL = "http://localhost:3000"

//USERS
export const getUsers = async () => {
    try {
      const users = axios.get(URL + "/user/");
      return users;
    } catch (error) {
      console.log(error);
    }
  };