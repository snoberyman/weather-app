import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrent, setLocation, setForecast } from "../weatherSlice"; // import weather redux slice
import { WeatherData } from "../../types/weatherTypes"; // Import the weather data interface (types)

import axios from "axios";

const MainInput = () => {
  const weatherAPI = import.meta.env.VITE_WEATHER_URL;
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>(""); // state to capture input field value
  const [isCalled, setIsCalled] = useState(false); // state to check if API called once

  // capture input field value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // const removeClass = () => {
  //   setinitialTranslate((prev) =>
  //     prev.replace("md:translate-y-20 lg:translate-y-40", "transition: transform 0.5s ease-out; ").trim()
  //   );
  // };

  const handleAddTodo = () => {
    // Fetch weather data from the API
    setIsCalled(true);
    axios
      .get<WeatherData>(`${weatherAPI}/forecast.json`, {
        params: {
          // current_fields: "temp_c,condition",
          // day_fields: "avgtemp_c,maxtemp_c,mintemp_c",
          // hour_fields: "time,temp_c,condition",
          key: apiKey,
          q: inputValue,
          days: 3,
        },
      })
      .then((response) => {
        console.log(response.data);
        const { current, location, forecast } = response.data;
        console.log(forecast);
        // Dispatch the current weather data to redux store
        dispatch(
          setCurrent({
            temp_c: current.temp_c,
            condition: { text: current.condition.text },
          })
        );
        // Dispatch the location data to redux store
        dispatch(
          setLocation({ name: location.name, country: location.country })
        );
        // Dispatch the forecast data (next 3 days) to redux store
        dispatch(setForecast({ forecastday: forecast.forecastday }));
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
    setInputValue(""); // Reset the input field
  };

  return (
    <div
      className={`transform transition-all duration-500 ease-out bg-primary-orange  rounded flex  items-center  shadow-sm shadow-black${
        isCalled
          ? "sm:py-8 sm:px-12  md:py-8 md:px-20 flex max-sm:flex-col sm-flex-col md:flex-row  md:translate-y-0 lg:translate-y-0 max-sm:py-15 max-sm:px-15 "
          : "md:translate-y-20 lg:translate-y-40 py-15 px-15 flex flex-col"
      }`}
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={`text-primary-black bg-white border border-primary-black p-2 rounded w-10vw sm:w-50 md:w-60 lg:w-70  text-sm focus:outline-none ${
          isCalled ? "mb-0 mr-8 max-sm:mb-12 max-sm:mr-0" : "mb-12"
        }`}
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
