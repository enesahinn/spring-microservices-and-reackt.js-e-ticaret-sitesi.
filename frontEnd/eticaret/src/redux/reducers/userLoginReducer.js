import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function userLoginReducer(state=initialState.user,action){
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return action.payload
    
        default:
            return state;
    }
}