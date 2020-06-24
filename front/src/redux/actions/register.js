import axios from "axios";
import { REGISTER } from "../constanst";


export const register = function(user) {
  return {
    type: REGISTER,
    user
  };
};

export const doRegister = registerUser => dispatch => {
  
  axios
    .post("/api/users/register", registerUser)
    .then(user => dispatch(register(user.data)));
};