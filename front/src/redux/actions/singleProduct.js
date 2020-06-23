import axios from "axios";
import { SINGLEPRODUCT } from "../constanst";

const oneProduct = (product) => {
  return {
    type: SINGLEPRODUCT,
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
