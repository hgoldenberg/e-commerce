import { SINGLEPRODUCT, ALLPRODUCTS } from "../constanst";

const initialState = {
  one: {},
  allProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SINGLEPRODUCT:
      return { ...state, one: action.id };
    case ALLPRODUCTS:
        return { ...state, allProducts: action.product };  
    

    default:
      return state;
  }
};
