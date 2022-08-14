import React, { useReducer } from "react";

const initialState = {
	todos: [],
	addTodo: () => { },
	deleteTodo: () => { },
}

const TodoReducer = (state, action) => {
	
	if (action.type === 'add-todo') {
		return {
			todos: [
				...state.todos,
				action.payload
			]
		}
	}

	if (action.type === 'delete-todo') {

		state.todos.splice(action.payload,1);

		return {
			todos: [...state.todos]
		}
	}

	return state;
}

const TodoContext = React.createContext(initialState);

export const TodoContextProvider = (props) => {

	const [todoReduce,dispatchTodo] = useReducer(TodoReducer,initialState)

	const addTodo = (todo) => {
		// setTodos([...todos, todo]);

		dispatchTodo({ type: 'add-todo', payload: todo });
	}

	const deleteTodo = (index) => {
		// todos.splice(index, 1);

		// setTodos([...todos]);

		dispatchTodo({ type: 'delete-todo', payload: index });
	}

	return (
		<TodoContext.Provider value={
			{
				...initialState,
				todos: todoReduce.todos,
				addTodo: addTodo,
				deleteTodo: deleteTodo,
			}}>{props.children}</TodoContext.Provider>
	)
}

export default TodoContext;