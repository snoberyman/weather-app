# Live Weather

### Live Weather Information
Fetch weather data from WeatherAPI by passing city name or postal code. Temperature, wind speed, and rainfall data are extracted from the response. The website is hosted on Netlify. 

[Live Link](https://live-weather-api-calls.netlify.app/) - View the live website here.

## Technology

- React
- TypeScript
- Redux
- Tailwind CSS

## Packages

- **ApexCharts**: A modern charting library for creating interactive and responsive charts.
- **React-Tooltip**: A simple and customizable tooltip component for React.
- **Netlify Functions**: Serverless functions used to handle API calls and fetch weather data.

## Features

- **Uses [WeatherAPI](https://www.weatherapi.com/)**: Fetches real-time weather data from WeatherAPI.
- **Input field validation and error handling**: Ensures users provide valid input, with appropriate error messages displayed if necessary.
- **Windspeed area chart**: Visualizes wind speed trends data over the next few days.
- **Rainfall heat-map**: Displays a dynamic heat map to represent precipitation over three days.
- **Choose between Metric and Imperial**: Allows users to toggle between Metric units and Imperial units.
- **Show on load**: Displays a loading indicator while fetching weather data.
- **Responsive**: The app adapts to all screen sizes and devices.
- **Netlify server-less function**: Uses Netlify's serverless functions to handle API calls securely and efficiently.
