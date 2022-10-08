import { 
    ADDRESS_CART_START,
    ADDRESS_CART_SUCCESS,
    ADD_CART_START, 
    ADD_CART_SUCCESS, 
    DECREMENT_CART_START, 
    DECREMENT_CART_SUCCESS, 
    INCREMENT_CART_START, 
    INCREMENT_CART_SUCCESS,
    INPUT_CART_START,
    INPUT_CART_SUCCESS,
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

export const incrementCartStart = (product,quantity) => ({
    type: INCREMENT_CART_START,
    payload: {
        product,
        quantity
    }
})

export const incrementCartSuccess = (product,quantity) => ({
    type: INCREMENT_CART_SUCCESS,
    payload: {
        product,
        quantity
    }
})

export const decrementCartStart = (product,quantity) => ({
    type: DECREMENT_CART_START,
    payload: {
        product,
        quantity
    }
})

export const decrementCartSuccess = (product,quantity) => ({
    type: DECREMENT_CART_SUCCESS,
    payload: {
        product,
        quantity
    }
})

export const inputCartStart = (product,quantity) => ({
    type: INPUT_CART_START,
    payload: {
        product,
        quantity
    }
})

export const inputCartSuccess = (product,quantity) => ({
    type: INPUT_CART_SUCCESS,
    payload: {
        product,
        quantity
    }
})

export const addressCartStart = (payload) => ({
    type: ADDRESS_CART_START,
    payload
})

export const addressCartSuccess = (payload) => ({
    type: ADDRESS_CART_SUCCESS,
    payload
})

export const removeCartStart = (product) => ({
    type: REMOVE_CART_START,
    payload: product
})

export const removeCartsSuccess = (product) => ({
    type: REMOVE_CART_SUCCESS,
    payload: product
})
