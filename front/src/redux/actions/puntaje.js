import axios from "axios";

export const fetchCreateStarts = (productId, userId, puntaje) =>{
    return dispatch => {
        return axios.post('/api/valoraciones', {productId, userId, puntaje})
    };
};
