import { ADD_ROLE_START, ADD_ROLE_SUCCESS } from "../contants/RoleContant";
import { fork, put, takeLatest } from 'redux-saga/effects'

function* roleStartAsync({payload}) {
    try {

        yield put(ADD_ROLE_SUCCESS, payload)

    }catch(err) {}
}


function* roleStart() {
    yield takeLatest(ADD_ROLE_START, roleStartAsync)
}

const RoleSagas = [
    fork(roleStart)
]

export default RoleSagas;