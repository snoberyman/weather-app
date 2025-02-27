import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weatherSlice"; // Import the full slice reducer

export const store = configureStore({
  reducer: {
    weather: weatherReducer, // Use the reducer from the slice
  },
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
