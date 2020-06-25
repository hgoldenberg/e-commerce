import { USERCART } from '../constanst'

const initialState = {
    cart:{}
};


export default (state = initialState , action) =>{
    switch(action.type){
        case USERCART :
            return {...state , cart: action.cart}
        default :
            return state
    }
};