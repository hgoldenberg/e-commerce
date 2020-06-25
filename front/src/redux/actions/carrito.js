import axios from "axios";
import { USERCART } from '../constanst'

const carritoDeUser = (cart) =>{
    return {
        type:USERCART,
        cart
    }
}


export const agregarCarrito = (carrito) =>{
    return dispatch =>{
        return axios.post('/api/carrito/agregarProducto', carrito)
    };
};


export const buscarCarrito = (userid) =>{
    return dispatch =>{
        return axios.get(`/api/carrito/${userid}`)
            .then(res => dispatch(carritoDeUser(res.data)))
    } 
};