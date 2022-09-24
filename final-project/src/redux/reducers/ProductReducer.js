import { ADD_PRODUCT_SUCCESS, REMOVE_PRODUCT_SUCCESS, UPDATE_PRODUCT_SUCCESS } from "../contants/ProductContant";

const initialProductState = {
    products: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
}

let products = [];

export const ProductReducer = (state = initialProductState, action) => {

    switch (action.type) {
        case ADD_PRODUCT_SUCCESS:

            products = [...state.products, action.payload];

            localStorage.setItem("products", JSON.stringify(products));

            return {
                ...state,
                products
            }

        case UPDATE_PRODUCT_SUCCESS:

            products = state.products.map((product, index) => {
                if (index === parseInt(action.payload.id)) {
                    return action.payload.product;
                }

                return product;
            })

            localStorage.setItem("products", JSON.stringify(products));

            return {
                ...state,
                products
            }

        case REMOVE_PRODUCT_SUCCESS:

            state.products.splice(action.payload, 1)

            products = [...state.products];

            localStorage.setItem("products", JSON.stringify(products));

            return {
                ...state,
                products
            }

        default:
            return state;
    }
}