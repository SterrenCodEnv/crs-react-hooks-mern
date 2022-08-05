import { configureStore } from '@reduxjs/toolkit';
import { todosAPI } from './apis/todosAPI';
import { counterSlice, pokemonSlice } from './slices';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    [todosAPI.reducerPath]: todosAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosAPI.middleware),
});
