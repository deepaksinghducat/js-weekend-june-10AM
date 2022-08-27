import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { COUNTER_INCREMENT , COUNTER_DECREMENT } from "../redux/constants/CounterActions";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const IncrementHandler = (event) => {
    event.preventDefault();

    dispatch({ type: COUNTER_INCREMENT });
  };

  const DecrementHandler = (event) => {
    event.preventDefault();

	dispatch({ type: COUNTER_DECREMENT });
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={IncrementHandler}>Increment</button>
      <button onClick={DecrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;
