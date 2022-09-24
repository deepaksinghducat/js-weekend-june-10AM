import { ADD_PRODUCT_START, ADD_PRODUCT_SUCCESS, REMOVE_PRODUCT_START, REMOVE_PRODUCT_SUCCESS, UPDATE_PRODUCT_START, UPDATE_PRODUCT_SUCCESS } from "../contants/ProductContant"

export const addProductStart = (role) => ({
    type: ADD_PRODUCT_START,
    payload: role
})

export const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})


export const updateProductStart = (product, id) => ({
    type: UPDATE_PRODUCT_START,
    payload: {
        product,
        id
    }
})

export const updateProductSuccess = (product, id) => ({
    type: UPDATE_PRODUCT_SUCCESS,
    payload: {
        product,
        id
    }
})

export const removeProductStart = (index) => ({
    type: REMOVE_PRODUCT_START,
    payload: index
})

export const removeProductSuccess = (index) => ({
    type: REMOVE_PRODUCT_SUCCESS,
    payload: index
})
