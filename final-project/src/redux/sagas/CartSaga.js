import { fork, put, takeLatest } from 'redux-saga/effects'
import { ADDRESS_CART_START, ADD_CART_START, DECREMENT_CART_START, INCREMENT_CART_START, INPUT_CART_START, REMOVE_CART_START } from "../contants/CartContant";
import { addCartSuccess, addressCartSuccess, decrementCartSuccess, incrementCartSuccess, inputCartSuccess, removeCartsSuccess } from "../actions/CartAction";

function* addCartStartAsync({payload}) {
    try {
        yield put(addCartSuccess(payload))

    }catch(err) {}
}

function* incrementCartStartAsync({payload}) {
    try {
        yield put(incrementCartSuccess(payload.product,payload.quantity))

    }catch(err) {}
}

function* decrementCartStartAsync({payload}) {
    try {
        yield put(decrementCartSuccess(payload.product,payload.quantity))

    }catch(err) {}
}

function* inputCartStartAsync({payload}) {
    try {
        yield put(inputCartSuccess(payload.product,payload.quantity))

    }catch(err) {}
}

function* addressCartStartAsync({payload}) {
    try {
        yield put(addressCartSuccess(payload))

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

function* incrementCartStart() {
    yield takeLatest(INCREMENT_CART_START, incrementCartStartAsync)
}

function* decrementCartStart() {
    yield takeLatest(DECREMENT_CART_START, decrementCartStartAsync)
}

function* inputCartStart() {
    yield takeLatest(INPUT_CART_START, inputCartStartAsync)
}

function* addressCartStart() {
    yield takeLatest(ADDRESS_CART_START, addressCartStartAsync)
}

function* removeCartStart() {
    yield takeLatest(REMOVE_CART_START, removeCartStartAsync)
}

const CartSagas = [
    fork(addCartStart),
    fork(incrementCartStart),
    fork(decrementCartStart),
    fork(inputCartStart),
    fork(addressCartStart),
    fork(removeCartStart),
]

export default CartSagas;