import { useState } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {

  const [todos,setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      todo
    ]) 
  }

  const deleteTodo = (index) => {
    // console.log(index);

    todos.splice(index,1);

    setTodos([
      ...todos
    ])
  }

  return (
    <div className="container mt-4">
      <Input addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
