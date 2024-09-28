import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageSlice";

// Create the Redux store
export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export default store;
