import axios from "axios";
import { LOG_IN } from "../constanst";
import { LOG_OUT } from "../constanst";
import { PERSIST_SESSION } from "../constanst";

// loggerte

export function logIn(user) {
  return {
    type: LOG_IN,
    user
  };
}
/*
export const persistS = function(user) {
  return {
    type: PERSIST_SESSION,
    isLogged: user
  };
};*/

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
      dispatch(logIn({}));
    })
    .catch(console.log);
};


// persistencia

/*export const persistS = function(user) {
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
*/