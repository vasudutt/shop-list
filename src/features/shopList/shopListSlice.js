import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../initialData';

const initialState = data;

export const shopListSlice = createSlice({
  name: 'shopList',
  initialState,
  reducers: {
    addShop: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() });
    },
    deleteShop: (state, action) => {
      const index = state.findIndex(
        (element) => element.id === action.payload
      );
      if (index !== -1) state.splice(index, 1);
    },
    editShop: (state, action) => {
      const index = state.findIndex(
        (element) => element.id === action.payload.id
      );
      if (index !== -1) state[index] = { ...action.payload };
    },
  },
});

export const { addShop, deleteShop, editShop } =
  shopListSlice.actions;

export default shopListSlice.reducer;
