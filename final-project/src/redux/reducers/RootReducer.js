import { combineReducers } from "@reduxjs/toolkit";
import { CartReducer } from "./CartReducer";
import { OrderReducer } from "./OrderReducer";
import { ProductReducer } from "./ProductReducer";
import { RoleReducer } from "./RoleReducer";
import { UserReducer } from "./UserReducer";

const reducers = combineReducers({
    roles: RoleReducer,
    user: UserReducer,
    product: ProductReducer,
    cart: CartReducer,
    order: OrderReducer
})

export default reducers;