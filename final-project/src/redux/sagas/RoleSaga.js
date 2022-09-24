import { ADD_ROLE_START, ADD_ROLE_SUCCESS, REMOVE_ROLE_START, UPDATE_ROLE_START } from "../contants/RoleContant";
import { fork, put, takeLatest } from 'redux-saga/effects'
import { addRoleSuccess, removeRoleSuccess, updateRoleSuccess } from "../actions/RoleAction";

function* addRoleStartAsync({payload}) {
    try {
        yield put(addRoleSuccess(payload))

    }catch(err) {}
}

function* updateRoleStartAsync({payload}) {
    try {
        yield put(updateRoleSuccess(payload.role,payload.id))

    }catch(err) {}
}

function* removeRoleStartAsync({payload}) {
    try {
        yield put(removeRoleSuccess(payload))

    }catch(err) {}
}

function* addRoleStart() {
    yield takeLatest(ADD_ROLE_START, addRoleStartAsync)
}

function* updateRoleStart() {
    yield takeLatest(UPDATE_ROLE_START, updateRoleStartAsync)
}

function* removeRoleStart() {
    yield takeLatest(REMOVE_ROLE_START, removeRoleStartAsync)
}

const RoleSagas = [
    fork(addRoleStart),
    fork(updateRoleStart),
    fork(removeRoleStart),
]

export default RoleSagas;