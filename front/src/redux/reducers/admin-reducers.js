import { ADMINUSERS } from "../constanst";

const initialState = {
  users: [],
  
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMINUSERS:
  return { ...state, users: action.user };
    
  
    default:
      return state;
  }
};
