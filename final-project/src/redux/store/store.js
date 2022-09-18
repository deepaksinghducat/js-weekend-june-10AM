import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducers/RootReducer";

import createSagaMiddleware from "redux-saga";
import RootSagas from "../sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const initialState = {}

const store = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleware],
    initialState,
    devTools: process.env.NODE_ENV === 'development' ? true: false
})

sagaMiddleware.run(RootSagas);

export default store;