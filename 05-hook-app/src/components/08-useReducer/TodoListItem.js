import React from "react";

export const TodoListItem = ({
  todo,
  index,
  handleDeleteTodo,
  handleToggle,
}) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        className={todo.done ? "complete" : ""}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1} - {todo.desc}
      </p>
      <button
        onClick={() => handleDeleteTodo(todo.id)}
        className="btn btn-outline-danger btn-sm"
      >
        Borrar
      </button>
    </li>
  );
};
