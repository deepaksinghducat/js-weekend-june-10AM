const { createStore } = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
	switch (action.type) {
		case "increment":
			return {
				...state,
				counter: state.counter + 1
			}

		case "decrement":
			return {
				...state,
				counter: state.counter - 1
			}

		default:
			return state;
	}
}

const store = createStore(counterReducer);

store.subscribe(() => {
	const currentState = store.getState();

	console.log(currentState);
})

store.dispatch({ type: "increment" })
store.dispatch({ type: "decrement" })


