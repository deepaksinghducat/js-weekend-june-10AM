import { all } from "redux-saga/effects";
import counterSaga from "./CounterSaga";

function* rootSaga() {
	yield all([
		...counterSaga
	])
}

export default rootSaga;