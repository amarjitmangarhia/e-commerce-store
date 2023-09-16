import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./react-store";

const store = configureStore({
  reducer: storeSlice.reducer,
});

export default store;
