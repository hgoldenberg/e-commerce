import { COMPRASUSER } from '../constanst';
import axios from 'axios';

const historyUser = (historial) => {
    return {
        type:COMPRASUSER,
        historial
    };
};

export const getHistoryUser = (id) =>{
    return dispatch => {
        return axios.get(`/api/compra/historial/${id}`).then(res => {
            return dispatch(historyUser(res.data))
        });
    };
};


export const getHistory = () =>{
    return dispatch =>{
        return axios.get('/api/compra').then(res =>{
            return dispatch(historyUser(res.data))
        });
    };
};