import { all } from "redux-saga/effects";
import CartSagas from "./CartSaga";
import ProductSagas from "./ProductSaga";
import RoleSagas from "./RoleSaga";
import UserSagas from "./UserSaga";

function* RootSagas() {
    yield all([
        ...RoleSagas,
        ...UserSagas,
        ...ProductSagas,
        ...CartSagas
    ])
}

export default RootSagas;