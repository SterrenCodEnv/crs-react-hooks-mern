export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.payload, ...initialState];

    case 'DELETE_TODO':
      return initialState.filter((todo) => todo.id !== action.payload);

    case 'TOGGLE_TODO':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    default:
      return initialState;
  }
};
