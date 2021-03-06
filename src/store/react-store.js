import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "a",
      header: "Asus Prime Gaming Motherboard",
      image: "https://m.media-amazon.com/images/I/61shsB-l2UL._SX569_.jpg",
      altTag: "asus-motherboard",
    },
    {
      id: "b",
      header: "AMD Ryzen 5 3600",
      image: "https://m.media-amazon.com/images/I/71WPGXQLcLL._SX425_.jpg",
      altTag: "amd-ryzen-5",
    },

    {
      id: "c",
      header: "Corsair Vengeance LPX 8GB RAM",
      image: "https://m.media-amazon.com/images/I/51qXHU7XItL._SX522_.jpg",
      altTag: "corasir-vegence",
    },

    {
      id: "d",
      header: "Corsair 550 Watt Power Supply",
      image: "https://m.media-amazon.com/images/I/514x11FuqCL._SX522_.jpg",
      altTag: "corsair 550 watt power supply",
    },

    {
      id: "e",
      header: "Seagate 1 TB Internal HDD",
      image: "https://m.media-amazon.com/images/I/71WDpMvEHTL._SX522_.jpg",
      altTag: "Seagate-1-TB-Internal",
    },

    {
      id: "f",
      header: "WD Green SATA 240GB SSD",
      image: "https://m.media-amazon.com/images/I/71yOeCQVTPL._SX569_.jpg",
      altTag: "wd-green-sata-240gb",
    },
  ],
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
