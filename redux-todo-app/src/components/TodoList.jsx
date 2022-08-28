import { useDispatch, useSelector } from "react-redux";
import { TODO_REMOVE } from "../constants/todoConstants";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <li className="list-group-item" key={index}>
            {index + 1} {todo}
            <i
              className="fa fa-times"
              style={{ float: "right" }}
              onClick={() => dispatch({ type: TODO_REMOVE, payload: index })}
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
