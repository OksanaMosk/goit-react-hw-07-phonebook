import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filters(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
  },
});

export const { filters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
