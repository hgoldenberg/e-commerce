import { combineReducers } from "redux";
import productsReducers from "./products-reducer";
import logUserReducer from "./logUserReducer";
import categoriesReducer from "./categoriesReducer";
import carritoUser from "./carrito-reducers";

export default combineReducers({
  productsReducers,
  logUserReducer,
  categoriesReducer,
  carritoUser,
});
