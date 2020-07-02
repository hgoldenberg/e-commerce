import { COMPRASUSER } from '../constanst'

const inicialState ={
    data: []
};

export default (state = inicialState , action) => {
    switch(action.type){
        case COMPRASUSER :
            return {...state , data:action.historial}
        default:
            return state
    };
}; 