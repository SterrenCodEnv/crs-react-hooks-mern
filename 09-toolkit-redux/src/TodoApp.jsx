import { useState } from 'react';
import { useGetTodosQuery, useGetTodoQuery } from './store/apis/todosAPI';

export const TodoApp = () => {
  const [id, setId] = useState(1);
  const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo } = useGetTodoQuery(id);

  const handleClick = () => {
    const newId = Math.floor(Math.random() * 200);
    setId(newId);
  };

  return (
    <>
      <h2>Todo - RTK Query</h2>
      <hr />
      {isLoading && <h4>Loading...</h4>}

      <pre>{JSON.stringify(todo, null, 4)}</pre>
      <button onClick={handleClick}>Next random TODO {'->'} </button>

      <hr />

      <h3>TODOS:</h3>

      <ul>
        {todos &&
          todos.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.completed ? 'DONE' : 'Pending'}</strong> -{' '}
              {todo.title}
            </li>
          ))}
      </ul>
    </>
  );
};
