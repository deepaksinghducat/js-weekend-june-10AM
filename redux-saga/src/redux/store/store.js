import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers/RootReducer";
import rootSaga from "../sagas/RootSaga";
const initialState = {}

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: reducers,
	middleware: [sagaMiddleware],
	initialState,
	devTools: true
})

sagaMiddleware.run(rootSaga)

export default store;