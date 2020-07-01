import axios from "axios";
import { ADMINCATEGORIE, ADMINUSERS } from "../constanst";

const adminCategorias = (param) => {
  return {
    type: ADMINCATEGORIE,
    param,
  };
};

const adminUsers = (user) => {
  return {
    type: ADMINUSERS,
    user,
  };
};

export const agregarCategoria = (categoria) => {
  return (dispatch) => {
    return axios.post("/api/categoria/crear", categoria).then((res) => {
      dispatch(adminCategorias(res.data));
    });
  };
};


export const fetchAllUsers = () => {
  return (dispatch) => {
    return axios.get(`/api/admin/clientes`).then((res) => {
      return dispatch(adminUsers(res.data));
    });
  };
};
