import { fork, put, takeLatest } from 'redux-saga/effects'
import { addOrderSuccess } from '../actions/OrderAction';
import { ADD_ORDER_START } from '../contants/OrderContant';

function* addOrderStartAsync({payload}) {
    try {
        yield put(addOrderSuccess(payload))

    }catch(err) {}
}

function* addOrderStart() {
    yield takeLatest(ADD_ORDER_START, addOrderStartAsync)
}


const OrderSagas = [
    fork(addOrderStart),
]

export default OrderSagas;