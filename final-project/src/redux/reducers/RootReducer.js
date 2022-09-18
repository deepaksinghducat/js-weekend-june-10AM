import { combineReducers } from "@reduxjs/toolkit";
import { RoleReducer } from "./RoleReducer";

const reducers = combineReducers({
    roles: RoleReducer
})

export default reducers;