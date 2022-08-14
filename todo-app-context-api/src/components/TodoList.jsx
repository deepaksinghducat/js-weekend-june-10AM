import React, { useContext } from "react";
import TodoContext from "../store/store";

function TodoList() {
	const store = useContext(TodoContext);
  return (
    <ul className="list-group">
      {store.todos.length > 0 ? (
        store.todos.map((todo, index) => (
          <li className="list-group-item" key={index}>
            {index + 1} {todo}
            <i
              className="fa fa-times"
              style={{ float: "right" }}
              onClick={() => store.deleteTodo(index)}
            ></i>
          </li>
        ))
      ) : (
        <li className="list-group-item">No Todo Found</li>
      )}
    </ul>
  );
}

export default TodoList;
