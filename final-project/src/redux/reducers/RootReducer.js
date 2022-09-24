import { combineReducers } from "@reduxjs/toolkit";
import { ProductReducer } from "./ProductReducer";
import { RoleReducer } from "./RoleReducer";
import { UserReducer } from "./UserReducer";

const reducers = combineReducers({
    roles: RoleReducer,
    user: UserReducer,
    product: ProductReducer
})

export default reducers;