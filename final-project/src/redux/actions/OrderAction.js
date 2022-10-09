import { ADD_ORDER_START, ADD_ORDER_SUCCESS } from "../contants/OrderContant"

export const addOrderStart = (cart) => ({
    type: ADD_ORDER_START,
    payload: cart
})

export const addOrderSuccess = (cart) => ({
    type: ADD_ORDER_SUCCESS,
    payload: cart
})
