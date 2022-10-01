import { 
    ADD_CART_START, 
    ADD_CART_SUCCESS, 
    REMOVE_CART_START, 
    REMOVE_CART_SUCCESS 
} from "../contants/CartContant"

export const addCartStart = (product) => ({
    type: ADD_CART_START,
    payload: product
})

export const addCartSuccess = (product) => ({
    type: ADD_CART_SUCCESS,
    payload: product
})

export const removeCartStart = (product) => ({
    type: REMOVE_CART_START,
    payload: product
})

export const removeCartsSuccess = (product) => ({
    type: REMOVE_CART_SUCCESS,
    payload: product
})
