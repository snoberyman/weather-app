// data types for the weather API response
export interface Current {
  temp_c: number | null; // The current temperature in Celsius
  condition: { // The current weather condition
    text: string;
  };
}

export interface Location {
  name: string; // The name of the location
  country: string;  // The country of the location
}

interface ForecastDay {
  date: string; // The date of the forecast
  day: {
    avgtemp_c: number; // Average temperature in Celsius
  };
}

export interface Forecast {
  forecastday: [ForecastDay, ForecastDay, ForecastDay]; // A tuple with exactly 3 forecast days
}

export interface WeatherData {
  current: Current;
  location: Location;
  forecast: Forecast;
}
