import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function deleteProductSuccess(product) {
  return { type: actionTypes.DELETE_PRODUCT_SUCCESS, payload: product };
}

export function deleteProduct(product) {

    let url = "/products/delete";
      url = url + "/" +  product.id;
console.log(url);
  
    return fetch(url,{method: "DELETE"})
  
}
//   return fetch("products/delete/" + (product.id), {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(product)
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }

export function saveProductApi(product) {
  return fetch("add/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return function(dispatch) {
    return saveProductApi(product)
      .then(savedProduct => {
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch(error => {
        throw error;
      });
  };
}

export async function handleResponse(response){
  if(response.ok){
    return response.json()
  }

  const error = await response.text()
  throw new Error(error)
}

export function handleError(error){
  console.error("Bir hata oluştu")
  throw error;
}

export function getProducts(categoryId) {
  return function(dispatch) {
    let url = "/products";
    if (categoryId) {
      url = url + "/" +  categoryId;
    }
  
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getProductsSuccess(result)));
  };
}
