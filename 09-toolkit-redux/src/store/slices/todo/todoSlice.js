import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { increment } = todoSlice.actions;
