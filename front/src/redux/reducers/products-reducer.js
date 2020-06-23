import { SINGLEPRODUCT } from "../constanst";

const initialState = {
  one: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SINGLEPRODUCT:
      return { ...state, one: action.product };
    default:
      return state;
  }
};
