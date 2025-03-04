
//  Frontend function that calls netlify function
export const fetchWeatherData = async (query: string) => {
  const apiUrl = import.meta.env.DEV
    ? "http://localhost:8888/.netlify/functions/fetchWeather"
    : "/.netlify/functions/fetchWeather";

  const response = await fetch(apiUrl, { // Fetch data from netlify function
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const data = await response.json(); // Parse response body

  if (!response.ok) {
    throw new Error(data.error || "Failed to fetch weather data"); // Pass error message
  }
  
    return data;
  };
