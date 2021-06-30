import * as actionTypes from "./actionTypes";

export function userLoginSuccess(products) {
    return { type: actionTypes.USER_LOGIN_SUCCESS, payload: user };
  }
  
  export function userSignupSuccess(product) {
    return { type: actionTypes.USER_SING_UP_SUCCESS, payload: signUp };
  }