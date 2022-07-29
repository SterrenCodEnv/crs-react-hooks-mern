export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          style={{ cursor: 'pointer' }}
          className={`align-self-center unselect text-capitalize ${
            todo.completed
              ? 'text-decoration-line-through text-muted fst-italic'
              : ''
          }`}
          onClick={() => onToggleTodo(todo.id)}
        >
          {todo.title}
        </span>
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className="btn btn-sm btn-danger btn-circle"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    </>
  );
};
