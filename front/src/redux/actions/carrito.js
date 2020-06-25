import axios from "axios";


export const agregarCarrito = (carrito) =>{
    return dispatch =>{
        return axios.post('/api/carrito/agregarProducto', carrito)
    };
};