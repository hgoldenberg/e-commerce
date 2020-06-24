import { REGISTER } from "../constanst";

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return Object.assign({}, state, { user: action.user });
  }
  return state;
};