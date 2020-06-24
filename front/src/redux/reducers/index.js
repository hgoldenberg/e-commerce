import { combineReducers } from "redux";
import productsReducers from "./products-reducer";
import registerReducer from "./registerReducer";
import logUserReducer from "./logUserReducer";

export default combineReducers({
  productsReducers,
  registerReducer,
  logUserReducer
});
