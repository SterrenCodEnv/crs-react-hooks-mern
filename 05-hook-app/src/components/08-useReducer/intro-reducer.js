const initialState = [
  {
    id: 1,
    todo: "Install SSD disk in laptop",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "add") return [...state, action.payload];

  return state;
};

let todoList = todoReducer();

const newTodo = {
  id: 2,
  todo: "Install Ubuntu in laptop",
  done: false,
};

const action = {
  type: "add",
  payload: newTodo,
};

todoList = todoReducer(todoList, action);

console.log(todoList);
