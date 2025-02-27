import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrent, setLocation, setForecast } from "../weatherSlice"; // import weather redux slice
import { WeatherData } from "../../types/weatherTypes"; // Import the weather data interface (types)

import axios from "axios";

const MainInput = () => {
  const weatherAPI = import.meta.env.VITE_WEATHER_URL;
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    axios
      .get<WeatherData>(`${weatherAPI}/forecast.json`, {
        params: {
          key: apiKey,
          q: inputValue,
          days: 3,
        },
      })
      .then((response) => {
        console.log(response.data);
        const { current, location, forecast } = response.data;

        // Dispatch the current weather data to redux store
        dispatch(setCurrent({ current }));
        // Dispatch the location data to redux store
        dispatch(setLocation({ location }));
        // Dispatch the forecast data (next 3 days) to redux store
        dispatch(setForecast({ forecast }));
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
    setInputValue(""); // Reset the input field
  };

  return (
    <div className="bg-primary-orange py-15 px-15 rounded flex flex-col items-center md:translate-y-20 lg:translate-y-40 shadow-sm shadow-black">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="text-primary-black bg-white border border-primary-black p-2 rounded w-10vw sm:w-50 md:w-60 lg:w-70 mb-12 text-sm focus:outline-none"
        placeholder="Enter city name..."
      />
      <button
        onClick={handleAddTodo}
        className="bg-primary-blue text-white py-1 px-8  rounded text-m cursor-pointer hover:bg-primary-rose hover:shadow-md"
      >
        Search
      </button>
    </div>
  );
};

export default MainInput;
