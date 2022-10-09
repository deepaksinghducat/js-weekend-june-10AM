import { ADD_ORDER_SUCCESS } from "../contants/OrderContant";

let previousOrderState = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : [];

const initialOrderState = {
    orders: previousOrderState ? previousOrderState : []
}

let orders = [];

export const OrderReducer = (state = initialOrderState, action) => {

   
    switch (action.type) {
        case ADD_ORDER_SUCCESS:
            orders = {
                ...state,
                orders: [
                    ...state.orders,
                    {
                        cartItems: action.payload.cartItems,
                        subTotal: action.payload.subTotal,
                        taxes: action.payload.taxes,
                        grandTotal: action.payload.grandTotal,
                        address: action.payload.address,
                    }
                ]
            }

            localStorage.setItem("orders", JSON.stringify(orders));

            return orders;

        default:
            return state;
    }
}