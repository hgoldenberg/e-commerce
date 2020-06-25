import axios from "axios";
import { ALLCATEGORIES } from "../constanst";

const allCategories = (categories) => {
  return {
    type: ALLCATEGORIES,
    categories,
  };
};

export const setAllCategories = () => (dispatch) => {
  return axios.get(`/api/categoria`).then((res) => {
    return dispatch(allCategories(res.data));
  });
};
