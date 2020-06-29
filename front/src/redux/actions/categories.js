import axios from "axios";
import { ONECATEGORIE, ALLCATEGORIES } from "../constanst";



const oneCategorie = (id) => {
  return {
    type: ONECATEGORIE,
    id,
  };
};

const allCategories = (categories) => {
  return {
    type: ALLCATEGORIES,
    categories,
  };
};

export const setOneCategorie = (id) => (dispatch) => {
  return axios.get(`/api/categoria/${id}`).then((res) => {
    return dispatch(oneCategorie(res.data));
  });
};

export const setAllCategories = () => (dispatch) => {
  return axios.get(`/api/categoria`).then((res) => {
    return dispatch(allCategories(res.data));
  });
};


