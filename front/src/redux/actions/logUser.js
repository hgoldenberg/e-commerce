import axios from "axios";
import { LOG_IN } from "../constanst";
import { LOG_OUT } from "../constanst";

// loggerte

export function logIn(user) {
  return {
    type: LOG_IN,
    user
  };
}

export const persistSession = () => dispatch => {
  axios
    .get("/api/users/persistencia")
    .then(res => res.data)
    .then(user => dispatch(logIn(user)));
};

// loggerte
export const doLogIn = (email, password) => dispatch => {
  return axios
    .post("/api/users/login", {
      email: email,
      password: password
    })
    .then(user => {
      return dispatch(logIn(user.data));
    });
};

// para deslogearme
export function logOut() {
  return {
    type: LOG_OUT
  };
}

export const doLogOut = () => dispatch => {
  return axios
    .get("/api/users/logout")
    .then(user => {
      return dispatch(logIn({}));
    })
    .catch(console.log);
};

export const setEditar = (obj) => dispatch => {
  return axios
    .put("/api/users/editar", obj)
}