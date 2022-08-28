import { ERR_PRODUCTS, GET_PRODUCTS } from "../constants/ProductContants";

const initialProductState = {
	products: [],
	err: ''
}

export const ProductReducer = (state = initialProductState,action) => {
	switch (action.type) {
		case GET_PRODUCTS: 

			return {
				...state,
				products: [...action.payload]
			}

		case ERR_PRODUCTS: 
			return {
				...state,
				products: [],
				err: action.payload
			}
		
		default:
			return state;
	}
}