import { fork, put, takeLatest } from 'redux-saga/effects'
import { ADD_CART_START, REMOVE_CART_START } from "../contants/CartContant";
import { addCartSuccess, removeCartsSuccess } from "../actions/CartAction";

function* addCartStartAsync({payload}) {
    try {
        yield put(addCartSuccess(payload))

    }catch(err) {}
}

function* removeCartStartAsync({payload}) {
    try {
        yield put(removeCartsSuccess(payload))

    }catch(err) {}
}

function* addCartStart() {
    yield takeLatest(ADD_CART_START, addCartStartAsync)
}

function* removeCartStart() {
    yield takeLatest(REMOVE_CART_START, removeCartStartAsync)
}

const CartSagas = [
    fork(addCartStart),
    fork(removeCartStart),
]

export default CartSagas;