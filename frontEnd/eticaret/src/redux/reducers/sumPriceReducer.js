import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function sumPriceReducer(state=initialState.sum,action){
    switch (action.type) {
        case actionTypes.SUM_PRICE:
        //     state = state + action.payload.quantity * action.payload.product.unitPrice;
             console.log(state);
        //     console.log(action.payload.quantity)
           return state;  
        default:
            return state;
    }
}