import { ADD_CART, REMOVE_CART } from "../constants/CartContants";

const initialCartState = {
	cartItem: [],
	err: ""
}

export const CartReducer = (state = initialCartState, action) => {
	switch (action.type) {

		case ADD_CART:
			console.log(action);
			return {
				...state,
				cartItem: [...state.cartItem, action.payload]
			}

		case REMOVE_CART:
			state.cartItem.splice(action.payload, 1);

			return {
				...state,
				cartItem: [...state.cartItem]
			}

		default:
			return state;
	}
}