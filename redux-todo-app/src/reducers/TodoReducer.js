import { TODO_ADD, TODO_REMOVE } from "../constants/todoConstants";

const initialState = {
	todos: ['fdsafdasf']
}

export const TodoReducer = (state = initialState, action) => {
	switch (action.type) {
		case TODO_ADD:
			return {
				...state,
				todos: [...state.todos, action.payload]
			}

		case TODO_REMOVE:
			state.todos.splice(action.payload, 1)

			return {
				...state,
				todos: [...state.todos]
			}

		default:
			return state;
	}
}