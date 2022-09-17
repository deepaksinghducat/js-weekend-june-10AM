import { combineReducers } from "@reduxjs/toolkit";
import { CounterReducer } from "./CounterReducer";

const reducers = combineReducers({
	counter : CounterReducer
})

export default reducers;