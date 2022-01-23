import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleDeleteTodo, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((t, i) => (
        <TodoListItem
          key={t.id}
          todo={t}
          index={i}
          handleDeleteTodo={handleDeleteTodo}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};
