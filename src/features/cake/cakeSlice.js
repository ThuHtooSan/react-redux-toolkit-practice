import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    order: state => {
      state.numOfCakes--;
    },
    restock: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { order, restock } = cakeSlice.actions;
