import { ADD_CART_SUCCESS, DECREMENT_CART_SUCCESS, INCREMENT_CART_SUCCESS, INPUT_CART_SUCCESS, REMOVE_CART_SUCCESS } from "../contants/CartContant";
import { addToCartHelper, removeToCartHelper } from "../Helpers/Helper";

let previousCartState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

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

            localStorage.setItem("cart", JSON.stringify(cart));

            return cart;

        case INCREMENT_CART_SUCCESS:
        case DECREMENT_CART_SUCCESS: 
        case INPUT_CART_SUCCESS:

            cart = addToCartHelper(state, action.payload.product, true, action.payload.quantity);

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