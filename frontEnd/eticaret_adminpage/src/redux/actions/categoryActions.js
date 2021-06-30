import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(categories){
    return {type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories}
}

export function getTopCategoriesSuccess(topCategories){
  return {type: actionTypes.GET_TOP_CATEGORIES_SUCCESS, payload: topCategories}
}

export function getCategories() {
  return function(dispatch) {
    let url = "http://localhost:3000/categories";
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getCategoriesSuccess(result)));
  };
}

export function getTopCategories() {
  return function(dispatch) {
    let url = "http://localhost:3000/topcategories";
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getTopCategoriesSuccess(result)));
  };
}

