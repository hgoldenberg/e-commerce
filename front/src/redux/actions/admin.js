import axios from "axios";
import { ADMINCATEGORIE } from "../constanst";

const adminCategorias = (param) => {
  return {
    type: ADMINCATEGORIE,
    param,
  };
};

export const agregarCategoria = (categoria) => {
  return (dispatch) => {
    return axios.post("/api/categoria/crear", categoria).then((res) => {
      dispatch(adminCategorias(res.data));
    });
  };
};
