import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData, Current, Location, Forecast } from "../types/weatherTypes";

// Defining the initial state using type interfaces
const initialState: WeatherData = {
  current: {
    temp_c: null,
    humidity: null,
    condition: {
      text: '',
      icon: '',
    },
  },
  location: {
    name: '',
    country: '',
    region: '',
    localtime: '',
    lon: null,
    lat: null,
  },
  forecast: {
    forecastday: [{ date: '', day: { avgtemp_c: 0 }, hour: [{ time: '', temp_c: null }] }, { date: '', day: { avgtemp_c: 0 }, hour: [{ time: '', temp_c: null }] }, { date: '', day: { avgtemp_c: 0 }, hour: [{ time: '', temp_c: null }] }],
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
