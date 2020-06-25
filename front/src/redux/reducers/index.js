import { combineReducers } from "redux";
import productsReducers from "./products-reducer";
import registerReducer from "./registerReducer";
import logUserReducer from "./logUserReducer";
import carritoUser from './carrito-reducers'

export default combineReducers({
  productsReducers,
  registerReducer,
  logUserReducer,
  carritoUser
});
