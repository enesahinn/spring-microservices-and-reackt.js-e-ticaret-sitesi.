import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function cartReducer(state=initialState.cart,action){
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            initialState.sum = initialState.sum + action.payload.quantity * action.payload.product.unitPrice;
            console.log(initialState.sum);
            
            console.log(action.payload.quantity)
            var addedItem = state.find(c=>c.product.id === action.payload.product.id);
            if(addedItem){
                var newState = state.map(cartItem=>{
                    if(cartItem.product.id===action.payload.product.id){
                        return Object.assign({},addedItem,{quantity:addedItem.quantity+1}) 
                    }
                    return cartItem;
                })
                console.log(newState);
                return newState;
            }else{
                return [...state,{...action.payload}]
            }
        case actionTypes.REMOVE_FROM_CART:
            const newState2 = state.filter(cartItem=>cartItem.product.id!==action.payload.id)
            return newState2;
        // case actionTypes.SUM_PRICE:
        //     console.log(action.payload)
        //     var sumItem =  action.payload;
        //     // console.log(action.payload)
        //      console.log("SUM_ITEM")
        //      console.log(sumItem)
        //     // console.log("STATE")
        //     // if(sumItem){
        //     //      var newState = state.map(cartItem=>{
        //     //         console.log("sumItem");
                    
        //     //         if(cartItem.product.id===action.payload.product.id){
        //     //             console.log(cartItem);
        //     //             return Object.assign({},sumItem,{sum : sumItem.sum + sumItem.quantity*sumItem.unitPrice})       
        //     //         }});
                   
        //     // }
           
        default:
            return state;
    }
}