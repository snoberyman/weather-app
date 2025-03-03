import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice"; // Importing the slice reducer

export const store = configureStore({ // Creating the redux store
  reducer: {
    weather: weatherReducer, // Using the reducer from the slice
  },
});

export type RootState = ReturnType<typeof store.getState>; // Exporting the type of the root state
// export type AppDispatch = typeof store.dispatch;

export default store;
