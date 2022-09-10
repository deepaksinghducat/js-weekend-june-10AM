import { START_DECREMENT, START_INCREMENT, SUCCESS_DECREMENT, SUCCESS_INCREMENT } from "../constants/CounterConstant";

export const startIncrement = () =>({
	type: START_INCREMENT
})

export const successIncrement = () =>({
	type: SUCCESS_INCREMENT
})

export const startDecrement = () =>({
	type: START_DECREMENT
})

export const successDecrement = () =>({
	type: SUCCESS_DECREMENT
})