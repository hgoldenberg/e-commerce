import axios from "axios";
import { LOG_IN } from "../constanst";
import { LOG_OUT } from "../constanst";
import { PERSIST_SESSION } from "../constanst";


export function logIn(isLogged) {
  return {
    type: LOG_IN,
    isLogged
  };
}

export const persistS = function(user) {
  return {
    type: PERSIST_SESSION,
    isLogged: user
  };
};

export const persistSession = user => dispatch => {
  
  axios
    .get("/api/me", user)
    .then(res => res.data)
    .then(user => dispatch(persistS(user)));
};



export const doLogIn = logInUser => dispatch => {
  return axios.post("/api/users/login", logInUser).then(user => {
    console.log(user.data)
    return dispatch(logIn(user.data))
  });
  
};



export function logOut(isLogged) {
  return {
    type: LOG_OUT
  };
}

export const doLogOut = logOutUser => dispatch => {
  axios
    .get("/api/users/logout")
    .then(user => {
      dispatch(logOut(user.data));
    })
    .catch(console.log);
};