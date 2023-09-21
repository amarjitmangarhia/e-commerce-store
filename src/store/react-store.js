import { createSlice } from "@reduxjs/toolkit";
import products from "../data-file"

const initialState = {
  products,
  show: false,
  items: [],
  showForm: false,
  orderSent: false,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    showCart(state) {
      state.show = !state.show;
    },
    showForm(state) {
      state.showForm = true;
    },
    hideForm(state) {
      state.showForm = false;
    },

    getData(state, action) {
      const generateId = Math.random();
      const newItems = action.payload;
      state.items.push({
        name: newItems.header,
        image: newItems.image,
        id: generateId,
      });
    },
    removeItem(state, action) {
      const id = action.payload;
      const filteredItems = state.items.filter((item) => item.id !== id);
      state.items = filteredItems;
    },
  },
});
export const storeSliceActions = storeSlice.actions;

export default storeSlice;
