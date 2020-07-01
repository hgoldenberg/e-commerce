import { ONECATEGORIE , ALLCATEGORIES } from "../constanst";

const initialState = {
  categorias: [],
  oneCat: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ONECATEGORIE:
  return { ...state, oneCat: action.id };
    case ALLCATEGORIES:
      return { ...state, categorias: action.categories };
  
    default:
      return state;
  }
};
