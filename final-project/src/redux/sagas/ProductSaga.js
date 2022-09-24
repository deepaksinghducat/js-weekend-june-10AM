import { fork, put, takeLatest } from 'redux-saga/effects'
import { addProductSuccess, removeProductSuccess, updateProductSuccess } from '../actions/ProductAction'
import { ADD_PRODUCT_START, REMOVE_PRODUCT_START, UPDATE_PRODUCT_START } from '../contants/ProductContant'

function* addProductStartAsync({payload}) {
    try {
        yield put(addProductSuccess(payload))

    }catch(err) {}
}

function* updateProductStartAsync({payload}) {
    try {
        yield put(updateProductSuccess(payload.product,payload.id))

    }catch(err) {}
}

function* removeProductStartAsync({payload}) {
    try {
        yield put(removeProductSuccess(payload))

    }catch(err) {}
}

function* addProductStart() {
    yield takeLatest(ADD_PRODUCT_START, addProductStartAsync)
}

function* updateProductStart() {
    yield takeLatest(UPDATE_PRODUCT_START, updateProductStartAsync)
}

function* removeProductStart() {
    yield takeLatest(REMOVE_PRODUCT_START, removeProductStartAsync)
}

const ProductSagas = [
    fork(addProductStart),
    fork(updateProductStart),
    fork(removeProductStart),
]

export default ProductSagas;