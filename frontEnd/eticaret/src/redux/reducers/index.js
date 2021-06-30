import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import topCategoryListReducer from "./topCategoryListReducer"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"
import cartReducer from "./cartReducer"
import saveProductReducer from "./saveProductReducer"
import userLoginReducer from "./userLoginReducer"
import favoriteReducer from "./favoriteReducer"
import productDetailReducer from "./productDetailReducer"
import sumPriceReducer from "./sumPriceReducer"



const rootReducer = combineReducers({
    changeCategoryReducer,
    topCategoryListReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,
    saveProductReducer,
    userLoginReducer,
    favoriteReducer,
    productDetailReducer,
    sumPriceReducer
})

export default rootReducer;