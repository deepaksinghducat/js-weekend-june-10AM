import React, { Fragment } from "react";
import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const [counter,setCounter] =  useCounter(0);

  const Increment = (event) => {
	event.preventDefault();
	setCounter(counter => counter + 1);
  }

  const Decrement  = (event) => {
	event.preventDefault();
	setCounter(counter => counter - 1);
  }

  return (
    <Fragment>
      <div>{counter}</div>
	   <button onClick={Increment}>Increment</button>
	   <button onClick={Decrement}>Increment</button>
    </Fragment>
  );
};

export default Counter;
