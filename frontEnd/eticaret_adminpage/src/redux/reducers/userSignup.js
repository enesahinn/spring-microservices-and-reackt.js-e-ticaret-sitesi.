import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function userLoginReducer(state=initialState.singUp,action){
    switch (action.type) {
        case actionTypes.USER_SIGN_UP:
            return action.payload
    
        default:
            return state;
    }
}