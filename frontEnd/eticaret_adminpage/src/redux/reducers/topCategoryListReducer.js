import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function topCategoryListReducer(state=initialState.topCategory,action){
    switch (action.type) {
        case actionTypes.GET_TOP_CATEGORIES_SUCCESS:
            return action.payload
        default:
            return state;
    }
}