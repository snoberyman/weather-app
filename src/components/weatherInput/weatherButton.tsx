interface WeatherButtonProps {
  isValid: boolean; // recieves the isValid state from the parent component
  callAPI: () => void; // recieves the callAPI function from the parent component
}

function WeatherButton({ isValid, callAPI }: WeatherButtonProps) {
  return (
    <button
      disabled={!isValid}
      onClick={callAPI}
      className={`${
        isValid
          ? " cursor-pointer bg-primary-blue  hover:bg-primary-sienna hover:shadow-md"
          : "bg-gray-600 cursor-not-allowed"
      } text-white py-1 px-8 rounded text-m`}
    >
      Search
    </button>
  );
}

export default WeatherButton;
