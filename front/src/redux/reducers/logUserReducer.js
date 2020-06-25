import { LOG_IN, LOG_OUT, PERSIST_SESSION } from "../constanst";

const initialState = {
  isLogged: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, state, { isLogged: action.user });
    case LOG_OUT:
      return Object.assign({}, state, { isLogged: false });
    case PERSIST_SESSION:
      return Object.assign({}, state, { isLogged: action.isLogged });
    default:
      return state
  }
};