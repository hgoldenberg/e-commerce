import { ALLCOMENTARIOSPRODUCT } from '../constanst'

const inicialState ={
    data: []
};

export default (state = inicialState , action) => {
    switch(action.type){
        case ALLCOMENTARIOSPRODUCT :
            return {...state , data:action.data}
        default:
            return state
    };
}; 