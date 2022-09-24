import { all } from "redux-saga/effects";
import RoleSagas from "./RoleSaga";
import UserSagas from "./UserSaga";

function* RootSagas() {
    yield all([
        ...RoleSagas,
        ...UserSagas
    ])
}

export default RootSagas;