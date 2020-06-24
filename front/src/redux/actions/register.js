import { REGISTER } from "../constant";
import axios from "axios";

export const register = function(user) {
  return {
    type: REGISTER,
    user
  };
};

export const doRegister = registerUser => dispatch => {
  
  axios
    .post("/api/register", registerUser)
    .then(user => dispatch(register(user.data)));
};