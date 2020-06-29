import axios from "axios";

export const doRegister = registerUser => dispatch => {
  
  return axios
    .post("/api/users/register", registerUser)
};