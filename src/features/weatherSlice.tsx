import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    current: {
      temp_c: null,
      condition: null,
    },
    location: {
      name: null,
      country: null,
    },
    forecast: [], // Forecast will be an array of 3 days of weather info
  },
  reducers: {
    setCurrent: (state, action) => {
      const { current } = action.payload;
      state.current.temp_c = current.temp_c;
      state.current.condition = current.condition.text;
    },
    setLocation: (state, action) => {
      const { location } = action.payload;
      state.location.name = location.name;
      state.location.country = location.country;
    },
    setForecast: (state, action) => {
      // Assuming action.payload is an array of forecast data for 3 days
      const { forecast } = action.payload;
      state.forecast = forecast;
    },
  },
});

// Exporting individual actions for each state part
export const { setCurrent, setLocation, setForecast } = weatherSlice.actions;
export default weatherSlice.reducer;
