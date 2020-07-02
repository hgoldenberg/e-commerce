import axios from "axios";
import { ADMINUSERS } from "../constanst";

const adminUsers = (user) => {
  return {
    type: ADMINUSERS,
    user,
  };
};

export const agregarCategoria = (categoria) => {
  return (dispatch) => {
    return axios.post("/api/categoria/crear", categoria)
  };
};

export const fetchAllUsers = () => {
  return (dispatch) => {
    return axios.get(`/api/admin/clientes`).then((res) => {
      return dispatch(adminUsers(res.data));
    });
  };
};


export const deleteCategorias = (id) =>{
  return dispatch => {
    return axios.delete(`/api/categoria/${id}`)
  }
};  

export const updateCategorias = (id , categoria) =>{
  return dispatch => {
    return axios.put(`/api/categoria/${id}` , categoria)
  }
};

export const deleteProduct = (id) =>{
  return dispatch => {
    return axios.delete(`/api/productos/${id}`)
  }
};

export const updateProduct = (id , producto) =>{
  return dispatch => {
    return axios.put(`/api/productos/${id}`, producto)
  }
};