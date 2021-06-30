import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function favoriteReducer(state=initialState.favorite,action){
    switch (action.type) {
        case actionTypes.ADD_TO_FAVORITE:
            var addedItem = state.find(c=>c.product.id ===action.payload.product.id);
            if(addedItem){
                return state;
            }else{
                return [...state,{...action.payload}]
            }
        case actionTypes.REMOVE_FROM_FAVORITE:
            const newState2 = state.filter(favoriteItem=>favoriteItem.product.id!==action.payload.id)
            return newState2;
        default:
            return state;
    }
}