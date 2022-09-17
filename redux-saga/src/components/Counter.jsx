import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDecrement, startIncrement } from "../redux/actions/CounterAction";

const Counter = () => {
  const { counter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(startIncrement());
  };

  const decrementHandler = () => {
    dispatch(startDecrement());
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;
