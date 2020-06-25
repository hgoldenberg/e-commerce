import { ALLCATEGORIES } from "../constanst";

const initialState = {
  categorias: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALLCATEGORIES:
      return { ...state, categorias: action.categories };
    default:
      return state;
  }
};
