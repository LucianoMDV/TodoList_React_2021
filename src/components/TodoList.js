import React, { useState } from "react";
import Todo from "./Todo";

const initialTodos = [
  {
    id: 1,
    title: "Todo #1",
    description: "Des del Todo #1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo #2",
    description: "Des del Todo #2",
    completed: true,
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  //   const todos = state[0];
  //   const setTodos = state[1];

  return (
    <div>
      <h1> Soy TodoList </h1>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
