import { all } from "redux-saga/effects";
import ProductSagas from "./ProductSaga";
import RoleSagas from "./RoleSaga";
import UserSagas from "./UserSaga";

function* RootSagas() {
    yield all([
        ...RoleSagas,
        ...UserSagas,
        ...ProductSagas
    ])
}

export default RootSagas;