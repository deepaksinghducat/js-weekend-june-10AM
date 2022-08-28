import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TODO_ADD } from "../constants/todoConstants";



function Input() {
  const [todo, setTodo] = useState("");
  const [err, setErr] = useState(false);

  const dispatch = useDispatch();

  const add = (event) => {
    event.preventDefault();

    if (todo.length > 0) {
      dispatch({type: TODO_ADD, payload: todo})
      setTodo("");
    } else {
      setErr(true);
    }
  };

  return (
    <form className="row g-3" onSubmit={add}>
      <div className="col-10">
        <input
          type="text"
          className="form-control"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
            setErr(false);
          }}
        />
        {err && <p className="text-danger">Please insert valid todo</p>}
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary mb-3">
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default Input;
