export interface Current {
  temp_c: number | null;
  condition: {
    text: string;
  };
}

export interface Location {
  name: string;
  country: string;
}

interface ForecastDay {
  date: string; // The date of the forecast
  day: {
    avgtemp_c: number; // Average temperature in Celsius
  };
}

interface Forecast {
  forecastday: [ForecastDay, ForecastDay, ForecastDay]; // A tuple with exactly 3 forecast days
}

export interface WeatherData {
  current: Current;
  location: Location;
  forecast: Forecast;
}
