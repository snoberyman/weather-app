import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrent, setLocation, setForecast } from "../../app/weatherSlice"; // import weather redux slice
import { WeatherData } from "../../types/weatherTypes"; // Import the weather data interface (types)

import { fetchWeatherData } from "../../services/weatherService"; // Import the new service function

import InputField from "../../components/weatherInput/inputField";
import WeatherButton from "../../components/weatherInput/weatherButton";

interface MainInputProps {
  fontLoaded: boolean;
  isCalled: boolean;
  setIsCalled: React.Dispatch<React.SetStateAction<boolean>>;
}

function MainInput({ fontLoaded, isCalled, setIsCalled }: MainInputProps) {
  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState<boolean>(false); // sates to wait for fonts to be loaded before enabling transition
  const [inputValue, setInputValue] = useState<string>(""); // state to capture input field value
  const [isValid, setIsValid] = useState<boolean>(true); // state to track input validity
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false); // state to track button clicks
  const [isError, setIsError] = useState<boolean>(false); // state to track the error state
  const [errorMessage, setErrorMessage] = useState(""); // state to store error message

  useEffect(() => {
    if (fontLoaded) {
      // wait for fonts (or other assets) to load
      // Delay transition effect by 100ms for component to load, then allow transition effect
      const timeoutId = setTimeout(() => {
        setLoaded(true); // Enable transition after delay. This prevents initial transition effect from happening.
      }, 100);

      // Cleanup timeout on component unmount or if fontLoaded changes
      return () => clearTimeout(timeoutId);
    }
  }, [fontLoaded]); // Run effect only when fontLoaded changes

  // Regex to validate city name (letters and spaces) or postal code (numbers)
  const validateInput = (value: string) => {
    if (value.trim() === "") {
      // If input is empty, reset button clicked state
      setIsButtonClicked(false);
      return true;
    }
    const cityNameRegex = /^[A-Za-zÀ-ÿ\s.'-]{1,50}$/; // Allows letters and spaces
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z](\s?\d[A-Za-z]\d)?$/; // Allows 3 characters at least or 7 at max of postal code pattern
    return cityNameRegex.test(value) || postalCodeRegex.test(value);
  };
  // Capture input field value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setInputValue(value);
    setIsValid(validateInput(value)); // Validate input on change
  };

  const callAPI = async () => {
    setIsButtonClicked(true); // Set button clicked to true
    if (inputValue.trim() === "") {
      setIsValid(false);
      setIsButtonClicked(false);
      // If input is empty, show tooltip, and do not call API
      return;
    }
    // Fetch weather data from the API
    try {
      const weatherData: WeatherData = await fetchWeatherData(inputValue); // use fetchWeatherData service function
      const { current, location, forecast } = weatherData;

      setIsCalled(true); // Set API called state to true
      setIsError(false); // Reset error state

      // Dispatch the current weather data to redux store
      dispatch(
        setCurrent({
          temp_c: current.temp_c,
          temp_f: current.temp_f,
          humidity: current.humidity,
          condition: {
            text: current.condition.text,
            icon: current.condition.icon,
          },
        })
      );
      // Dispatch the location data to redux store
      dispatch(
        setLocation({
          name: location.name,
          country: location.country,
          region: location.region,
          localtime: location.localtime,
          lon: location.lon,
          lat: location.lat,
        })
      );
      // Dispatch the forecast data (next 3 days) to redux store
      dispatch(setForecast({ forecastday: forecast.forecastday }));
    } catch (error) {
      if (error instanceof Error) {
        setIsError(true);
        setErrorMessage(error.message);
      }
      // console.error("Error fetching weather data:", error);
    } finally {
      // Reset the button clicked state and input value after the request completes
      setIsButtonClicked(false);
      setInputValue(""); // Reset the input field
    }
  };
  if (!fontLoaded) {
    return <div></div>; // Show empty if fonts not loaded yet
  }

  return (
    <div
      className={`${
        loaded ? "transform transition-all duration-500 ease-out" : ""
      } bg-primary-orange rounded flex items-center shadow-sm shadow-black mb-10 z-10 ${
        isCalled
          ? "sm:px-12 sm:py-8 md:py-8 md:px-20 flex max-sm:flex-col md:flex-row md:translate-y-0 lg:translate-y-0 max-sm:py-15 max-sm:px-15"
          : "md:translate-y-20 lg:translate-y-45 lg:py-15 lg:px-20 xl:py-18 xl:px-22 py-15 px-15 flex flex-col"
      }`}
    >
      <InputField
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        isValid={isValid}
        isCalled={isCalled}
        isButtonClicked={isButtonClicked}
      />
      <WeatherButton isValid={isValid} callAPI={callAPI} />
      {isButtonClicked && isValid ? (
        <div
          className={`items-center w-[20px] m-auto h-[20px] absolute  ${
            isCalled ? "mt-2 sm:ml-4 bottom-10 sm:right-10" : "mt-5 bottom-4"
          }`}
        >
          <img src="/Loading_icon.gif" alt="" className="self-center" />
        </div>
      ) : (
        ""
      )}
      <span
        className={`text-red-900 mt-4 text-xs max-sm:max-w-[160px] w-50 text-center md:ml-4 absolute sm:w-full max-sm:bottom-4  ${
          isCalled ? " sm:bottom-2 sm:left-0" : " sm:bottom-10"
        }`}
      >
        {isError ? errorMessage : ""}
      </span>
    </div>
  );
}

export default MainInput;
