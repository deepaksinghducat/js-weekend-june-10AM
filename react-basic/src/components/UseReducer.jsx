import React from 'react'
import { useReducer } from 'react';
import { CounterReducer } from './counterReducer';

function UseReducer() {

	const [counter,dispatchCounter] = useReducer(CounterReducer,{
		counter: 0
	})

	const IncrementCounterHandler = (event) => {
		event.preventDefault();
		dispatchCounter({type: 'increment', payload: 1})
	}

	const DecrementCounterHandler = (event) => {
		event.preventDefault();
		dispatchCounter({type: 'decrement', payload: 1})
	}

  return (
	<div>
		<p>{counter.counter}</p>
		<button onClick={IncrementCounterHandler}>Increment Counter</button>
		<button onClick={DecrementCounterHandler}>Decrement Counter</button>
	</div>
  )
}

export default UseReducer