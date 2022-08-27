import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "../constants/CounterActions";

const initialCounter = {
	counter: 10
}

export const CounterReducer = (state = initialCounter, action) => {
	switch (action.type) {
		case COUNTER_INCREMENT:
			return {
				...state,
				counter: state.counter + 1
			}

		case COUNTER_DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			}

		default:
			return state;
	}
}