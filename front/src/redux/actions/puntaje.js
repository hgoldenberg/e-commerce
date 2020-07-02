import axios from "axios";
import { SETRATINGPRODUCT, SETALLPUNTAJESPRODUCT } from "../constanst";

const ratingProduct = (star) => {
    return {
      type: SETRATINGPRODUCT,
      star,
    };
};

const allPuntajesProduct = (stars) => {
    return {
        type: SETALLPUNTAJESPRODUCT,
        stars
    }
}

export const fetchCreateStarts = (productId, userId, puntaje) =>{
    return dispatch => {
        return axios.post('/api/valoraciones', {productId, userId, puntaje})
    };
};

export const setRatingProduct = (productId) => {
    return dispatch => {
        return axios.get(`/api/valoraciones/${productId}`).then((res) => {
            return dispatch(ratingProduct(res.data.rating))
        })
    }
}

export const setAllPuntajesProduct = (productId) => {
    return dispatch => {
        return axios.get(`/api/valoraciones/producto/${productId}`).then((res) => {
            return dispatch(allPuntajesProduct(res.data))
        })
    }
}