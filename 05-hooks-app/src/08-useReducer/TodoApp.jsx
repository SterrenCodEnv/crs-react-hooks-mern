import { useState, useEffect } from 'react';
import { TodoList, TodoForm } from './components';
import { useTodo } from '../hooks/useTodo';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {
  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } =
    useTodo(init);

  const [pendingTodo, setPendingTodo] = useState(0);

  useEffect(() => {
    setPendingTodo(todos.filter((todo) => !todo.completed).length);
  }, [todos]);

  return (
    <>
      <h2>
        Todo App <small className="text-muted">| Pending: {pendingTodo}</small>
      </h2>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>TODO</h4>
          <hr />
          <TodoForm onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
