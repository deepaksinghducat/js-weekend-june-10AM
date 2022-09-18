import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "../reducers/RootReducer";

const initialState = {
	products: [],
	carts: []
}

const middleware = [thunk]

const store = configureStore({
	reducer: reducers,
	middleware,
	initialState,
	devTools: true
})

export default store;