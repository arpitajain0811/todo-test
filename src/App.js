import React from "react";
import { TodoForm } from './components/TodoForm';
import { Todo } from './components/TodoItem';
import "./App.css";

const App = () => {
  const [todos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    todos.push({ text:text, isCompleted: false });
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo
            todo={todo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;