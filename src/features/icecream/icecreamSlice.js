import { createSlice } from '@reduxjs/toolkit';
import { order as cakeOrder } from '../cake/cakeSlice';

const initialState = {
  numOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    order: state => {
      state.numOfIcecream--;
    },
    restock: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(cakeOrder, state => {
      state.numOfIcecream--;
    });
  },
});

export default icecreamSlice.reducer;
export const { order, restock } = icecreamSlice.actions;
