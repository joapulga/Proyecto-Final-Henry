import axios from "axios";

const URL = "http://localhost:3000";

export const findAllCredits = async () => {
    try {
      const users = await axios.get(URL + "/credit");
      return users;
    } catch (error) {
      console.log(error);
    }
  };