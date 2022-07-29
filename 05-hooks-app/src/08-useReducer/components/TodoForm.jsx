import { useForm } from '../../hooks/useForm';

export const TodoForm = ({ onNewTodo }) => {
  const { title, onInputChange, onResetForm } = useForm({
    title: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    const newTodo = {
      id: new Date().getTime(),
      title,
      completed: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="title"
          type="text"
          placeholder="What's there to do?"
          className="form-control"
          value={title}
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-3">
          Add
        </button>
      </form>
    </>
  );
};
