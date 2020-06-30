import { combineReducers } from "redux";
import productsReducers from "./products-reducer";
import logUserReducer from "./logUserReducer";
import categoriesReducer from "./categoriesReducer";
import carritoUser from "./carrito-reducers";
import comprasReducer from './compras-reducer'

export default combineReducers({
  productsReducers,
  logUserReducer,
  categoriesReducer,
  carritoUser,
  comprasReducer
});
