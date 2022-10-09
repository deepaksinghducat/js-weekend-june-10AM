import { fork, put, takeLatest } from 'redux-saga/effects'
import { addUserSuccess, removeUserSuccess, updateUserSuccess } from '../actions/UserAction'
import { ADD_USER_START, REMOVE_USER_START, UPDATE_USER_START } from '../contants/UserContant'

function* addUserStartAsync({payload}) {
    try {
        yield put(addUserSuccess(payload))

    }catch(err) {}
}

function* updateUserStartAsync({payload}) {

    console.log(payload);

    try {
        yield put(updateUserSuccess(payload.user,payload.id))

    }catch(err) {}
}

function* removeUserStartAsync({payload}) {
    try {
        yield put(removeUserSuccess(payload))

    }catch(err) {}
}

function* addUserStart() {
    yield takeLatest(ADD_USER_START, addUserStartAsync)
}

function* updateUserStart() {
    yield takeLatest(UPDATE_USER_START, updateUserStartAsync)
}

function* removeUserStart() {
    yield takeLatest(REMOVE_USER_START, removeUserStartAsync)
}

const UserSagas = [
    fork(addUserStart),
    fork(updateUserStart),
    fork(removeUserStart),
]

export default UserSagas;