import { ADD_CART_SUCCESS, REMOVE_CART_SUCCESS } from "../contants/CartContant";
import { addToCartHelper, removeToCartHelper } from "../Helpers/Helper";

let previousCartState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

console.log(previousCartState);

const initialCartState = {
    cartItems: previousCartState ? previousCartState.cartItems: [],
    subTotal: previousCartState ? previousCartState.subTotal: 0,
    taxes:  previousCartState ? previousCartState.taxes:0,
    grandTotal: previousCartState ? previousCartState.grandTotal: 0,
}

let cart = [];

export const CartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ADD_CART_SUCCESS:

            cart = addToCartHelper(state, action.payload);

            console.log(cart);

            localStorage.setItem("cart", JSON.stringify(cart));

            return cart;

        case REMOVE_CART_SUCCESS:

            cart = removeToCartHelper(state, action.payload);

            localStorage.setItem("cart", JSON.stringify(cart));

            return cart;

        default:
            return state;
    }
}