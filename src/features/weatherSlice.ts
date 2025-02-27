import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData, Current, Location, Forecast } from "../types/weatherTypes";

// Define the initial state using your interfaces
const initialState: WeatherData = {
  current: {
    temp_c: null,
    condition: {
      text: '',
    },
  },
  location: {
    name: '',
    country: '',
  },
  forecast: {
    forecastday: [{ date: '', day: { avgtemp_c: 0 } }, { date: '', day: { avgtemp_c: 0 } }, { date: '', day: { avgtemp_c: 0 } }],
  },
};

// Create the slice
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<Current>) => {
      state.current = action.payload;
    },
    setLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
    setForecast: (state, action: PayloadAction<Forecast>) => {
      state.forecast = action.payload;
    },
  },
});

// Export actions and reducer
export const { setCurrent, setLocation, setForecast } = weatherSlice.actions;
export default weatherSlice.reducer;
