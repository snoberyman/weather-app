import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice"; // Importing the slice reducer

export const store = configureStore({
  reducer: {
    weather: weatherReducer, // Using the reducer from the slice
  },
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
