import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default filtersSlice.reducer;

export const { changefilter } = filtersSlice.actions;
