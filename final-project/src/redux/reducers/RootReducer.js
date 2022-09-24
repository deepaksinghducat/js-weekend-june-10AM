import { combineReducers } from "@reduxjs/toolkit";
import { RoleReducer } from "./RoleReducer";
import { UserReducer } from "./UserReducer";

const reducers = combineReducers({
    roles: RoleReducer,
    user: UserReducer
})

export default reducers;