import axios from "axios";
import { SINGLEPRODUCT, ALLPRODUCTS } from "../constanst";

const oneProduct = (id) => {
  return {
    type: SINGLEPRODUCT,
    id,
  };
};

const allProduct = (product) => {
  return {
    type: ALLPRODUCTS,
    product,
  };
};

export const fetchProduct = (id) => {
  return (dispatch) => {
    return axios.get(`/api/productos/${id}`).then((res) => {
      return dispatch(oneProduct(res.data));
    });
  };
};

export const fetchAllProducts = ()=> {
return (dispatch) => {
  return axios.get (`/api/productos`).then((res)=>{
    return dispatch (allProduct(res.data));
  });
};
};