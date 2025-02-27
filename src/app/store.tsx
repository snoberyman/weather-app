import { configureStore } from "@reduxjs/toolkit";
import { setCurrent, setLocation, setForecast } from "../features/weatherSlice";
// import reducers from slice files: featureNameReducer

export const store = configureStore({
  reducer: {
    // pass reducers with their name
    weather: setCurrent,
    location: setLocation,
    forecast: setForecast,
  },
});

export default store;
