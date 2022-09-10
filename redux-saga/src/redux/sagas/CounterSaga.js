import { delay, fork, put, takeLatest } from 'redux-saga/effects';
import { successDecrement, successIncrement } from '../actions/CounterAction';
import { START_DECREMENT, START_INCREMENT } from '../constants/CounterConstant';

function* startIncrementSync() {
	try {
		yield delay(5000)
		yield put(successIncrement());
	} catch (error) {

	}
}

function* startDecrementSync() {
	try {
		yield put(successDecrement());
	} catch (error) {

	}
}

function* startIncrement() {
	yield takeLatest(START_INCREMENT, startIncrementSync);
}

function* startDecrement() {
	yield takeLatest(START_DECREMENT, startDecrementSync);
}

const counterSaga = [
	fork(startIncrement),
	fork(startDecrement)
]

export default counterSaga;
