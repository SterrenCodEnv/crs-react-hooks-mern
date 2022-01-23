import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo, todos }) => {
  const [{ decription }, handleInputChange, reset] = useForm({
    decription: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (decription.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: decription,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h5>Add TODO</h5>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="decription"
          placeholder="Add..."
          autoComplete="off"
          value={decription}
          onChange={handleInputChange}
        />
        <div className="text-end">
          <button type="submit" className="btn btn-outline-info btn-sm mt-1">
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};
