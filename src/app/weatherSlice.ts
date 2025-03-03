import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData, Current, Location, Forecast } from "../types/weatherTypes";

// Defining the initial state using type interfaces
const initialState: WeatherData = {
  current: {
    temp_c: null,
    temp_f: null,
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
    forecastday: [
      { date: '', day: { avgtemp_c: 0 , avgtemp_f: 0, condition: {text: '',icon: '',} }, hour: [{ time: '', temp_c: null, temp_f:null, precip_mm:null, precip_in:null, wind_kph:null, wind_mph:null }] }, 
      { date: '', day: { avgtemp_c: 0 , avgtemp_f: 0, condition: {text: '',icon: '',} }, hour: [{ time: '', temp_c: null, temp_f:null, precip_mm:null, precip_in:null, wind_kph:null, wind_mph:null }] }, 
      { date: '', day: { avgtemp_c: 0 , avgtemp_f: 0, condition: {text: '',icon: '',} }, hour: [{ time: '', temp_c: null, temp_f:null, precip_mm:null, precip_in:null, wind_kph:null, wind_mph:null }] }],
  },
};

const weatherSlice = createSlice({ // Create a slice  for the weather data 
  name: "weather",
  initialState,
  reducers: { // Define reducers  to update the state
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
