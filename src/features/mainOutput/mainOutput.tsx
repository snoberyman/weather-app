// import { useSelector } from "react-redux";
// import { RootState } from "../../app/store"; // Adjust path based on your project structure
import WeatherBoxSmall from "../../components/weatherBox/weatherBoxSmall";
import WeatherBoxLarge from "../../components/weatherBox/weatherBoxLarge";

const MainOutput = () => {
  // const weather = useSelector((state: RootState) => state.weather);
  return (
    <div className="mt-30 mb-50 bg-primary-blue w-[60vw] h-auto border-2 border-white grid grid-cols-1 md:grid-cols-[3fr_1fr] grid-rows-3 gap-10 p-8 justify-between ">
      {/* Location and date info */}
      <div className="grid grid-cols-2 grid-rows-1 gap-4 col-start-1 row-start-1 ">
        <div className="flex flex-col text-left ">
          <h2 className="text-xl/10">Vancouver</h2>
          <h4 className="text-lg">British Columbia, Canada</h4>
        </div>
        <div className="flex flex-col text-right">
          <h2 className="text-xl/10">2025-02-25</h2>
          <h4 className="text-lg">02:00 PM</h4>
        </div>
      </div>
      {/* Main weather info */}
      <div className=" items-start grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] gap-5 col-start-1 row-start-2 ">
        <div className="flex flex-col ">
          <WeatherBoxSmall />
        </div>
        <div className="flex flex-col ">
          <WeatherBoxLarge />
        </div>
        <div className="flex flex-col ">
          <WeatherBoxLarge />
        </div>
      </div>
      {/* Hourly temperature Info */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 col-start-1 row-start-3 justify-between">
        <div className="flex flex-col">
          <WeatherBoxSmall />
        </div>
        <div className="flex flex-col">
          <WeatherBoxSmall />
        </div>
        <div className="flex flex-col">
          <WeatherBoxSmall />
        </div>
        <div className="flex flex-col">
          <WeatherBoxSmall />
        </div>
      </div>
      {/* Map */}
      <div className="bg-white h-60 md:h-full w-full col-start-1 lg:col-start-2 row-span-3"></div>
    </div>
  );
};

export default MainOutput;
