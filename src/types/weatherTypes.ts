// data types for the weather API response
export interface Current {
  temp_c: number | null; // The current temperature in Celsius
  humidity: number | null
  condition: { // The current weather condition
    text: string;
    icon: string;
  };
}

export interface Location {
  name: string; // The name of the location
  country: string;  // The country of the location
  region: string; // The region of the location
  localtime: string // local time epoch
}


interface HourData {
  // Define the structure of an hour object
  time: string;
  temp_c: number | null;
}

interface ForecastDay {
  date: string;
  day: {
    avgtemp_c: number;
  };
  hour: HourData[]; // Array of 24 hour objects
}

export interface Forecast {
  forecastday: [ForecastDay, ForecastDay, ForecastDay]; // A tuple with exactly 3 forecast days
}

export interface WeatherData {
  current: Current;
  location: Location;
  forecast: Forecast;
}
