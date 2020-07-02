import axios from "axios";
import { ALLCOMENTARIOSPRODUCT } from "../constanst";

const allComentariosProduct = (data) => {
    return {
      type: ALLCOMENTARIOSPRODUCT,
      data,
    };
};

export const fetchCreateComentario = (productId, userId, comentarios) =>{
    return dispatch => {
        return axios.post('/api/comentarios', {productId, userId, comentarios})
    };
};

export const setAllComentariosProduct = (productId) =>  (dispatch) => {
    return axios.get(`/api/comentarios/${productId}`).then((res) => {
        return dispatch(allComentariosProduct(res.data));
    })
}