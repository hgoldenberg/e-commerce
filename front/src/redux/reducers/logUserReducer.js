import { LOG_IN, LOG_OUT, PERSIST_SESSION } from "../constanst";

const initialState = {
  isLogged: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, state, { isLogged: action.isLogged });
    case LOG_OUT:
      return Object.assign({}, state, { isLogged: {} });
    case PERSIST_SESSION:
      return Object.assign({}, state, { isLogged: action.isLogged });
  }
  return state;
};