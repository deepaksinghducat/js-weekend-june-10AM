import { SUCCESS_DECREMENT, SUCCESS_INCREMENT } from "../constants/CounterConstant";

const initialCounterState = {
	counter: 12
}

export const CounterReducer = (state = initialCounterState, action) => {
	switch (action.type) {
		case SUCCESS_INCREMENT:
			
			return {
				...state,
				counter: state.counter + 1
			}

		case SUCCESS_DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			}

		default:
			return state;
	}
}