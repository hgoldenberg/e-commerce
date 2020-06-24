import axios from "axios";
import { LOG_IN } from "../constant";
import { LOG_OUT } from "../constant";
import { PERSIST_SESSION } from "../constant";

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

export function logIn(isLogged) {
  return {
    type: LOG_IN,
    isLogged
  };
}

export const doLogIn = logInUser => dispatch => {
  axios.post("/api/login", logInUser).then(user => dispatch(logIn(user.data)));
};



export function logOut(isLogged) {
  return {
    type: LOG_OUT
  };
}

export const doLogOut = logOutUser => dispatch => {
  axios
    .get("/api/logout")
    .then(user => {
      dispatch(logOut(user.data));
    })
    .catch(console.log);
};