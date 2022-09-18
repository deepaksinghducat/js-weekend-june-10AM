import { all } from "redux-saga/effects";
import RoleSagas from "./RoleSaga";

function* RootSagas() {
    yield all([
        ...RoleSagas
    ])
}

export default RootSagas;