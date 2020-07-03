import { SINGLEPRODUCT, ALLPRODUCTS } from "../constanst";

const initialState = {
  one: {},
  allProducts: [],
  carrito: JSON.parse(localStorage.getItem('data')),
  agregar: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SINGLEPRODUCT:
      return { ...state, one: action.id };
    case ALLPRODUCTS:
        return { ...state, allProducts: action.product };  
    case 'AGREGAR':
        return { ...state, agregar: [...state.agregar, action.agregado] }
    case 'SETSTORAGE':
        localStorage.setItem('data', JSON.stringify([...state.agregar]))
        return { ...state, carrito: [...state.agregar]}
    case 'DELETESTORAGE':
        localStorage.setItem('data', JSON.stringify(action.borrar))
        return {...state, carrito: action.borrar}
    default:
      return state;
  }
};
