import { SETRATINGPRODUCT, SETALLPUNTAJESPRODUCT } from '../constanst'

const inicialState ={
    star: 0,
    stars: []
};

export default (state = inicialState , action) => {
    switch(action.type){
        case SETRATINGPRODUCT :
            return {...state , star: action.star}
        case SETALLPUNTAJESPRODUCT :
            return {...state, stars: action.stars}
        default:
            return state
    };
}; 