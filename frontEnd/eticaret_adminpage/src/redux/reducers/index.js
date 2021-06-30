import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import topCategoryListReducer from "./topCategoryListReducer"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"
import saveProductReducer from "./saveProductReducer"
import userLoginReducer from "./userLoginReducer"




const rootReducer = combineReducers({
    changeCategoryReducer,
    topCategoryListReducer,
    categoryListReducer,
    productListReducer,
    saveProductReducer,
    userLoginReducer
})

export default rootReducer;