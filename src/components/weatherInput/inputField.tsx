import React from "react";
import { Tooltip } from "react-tooltip";

interface WeatherInputProps {
  inputValue: string; //
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  isCalled: boolean;
  isButtonClicked: boolean;
}

function InputField({
  inputValue, // recieves the inputValue state from the parent component
  handleInputChange, // recieves the handleInputChange function from the parent component
  isValid, // recieves the isValid state from the parent component
  isCalled, // recieves the isCalled state from the parent component
  isButtonClicked, // recieves the isButtonClicked state from the parent component
}: WeatherInputProps) {
  // Tooltip content based on input value: emtpy or invalid input
  const tooltipContent =
    inputValue.trim() === ""
      ? "Input cannot be empty!"
      : "Invalid input! Please enter city names or postal codes only.";

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={`text-primary-black bg-white border ${
          isValid ? "border-primary-black" : "border-red-500"
        } p-2 rounded w-10vw sm:w-50 md:w-60 lg:w-70 text-sm focus:outline-none  ${
          isCalled ? "mb-0 mr-8 max-sm:mb-12 max-sm:mr-0" : "mb-12"
        }`}
        placeholder="Enter city name or postal code..."
        data-tooltip-id="input-error-tooltip"
        data-tooltip-content={tooltipContent}
        data-tooltip-place="top"
      />
      {!isValid && (
        <Tooltip
          id="input-error-tooltip"
          isOpen={!isValid}
          className="max-sm:max-w-70 text-center"
        />
      )}
      {inputValue.trim() === "" && isButtonClicked && (
        <Tooltip id="input-error-tooltip" isOpen={true} />
      )}
    </div>
  );
}

export default InputField;
