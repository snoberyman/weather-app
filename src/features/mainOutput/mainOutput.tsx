// import { useSelector } from "react-redux";
// import { RootState } from "../../app/store"; // Adjust path based on your project structure
import WeatherBoxSmall from '../../components/weatherBox/weatherBoxSmall'
import WeatherBoxLarge from '../../components/weatherBox/weatherBoxLarge';

const MainOutput = () => {
  // const weather = useSelector((state: RootState) => state.weather);

  return (
    <div className="  mt-30 mb-50 bg-primary-blue w-[60vw] h-96 border-2 border-white grid grid-cols-[3fr_1fr] grid-rows-3 gap-4 p-4">
      {/* Row 1: Location and Date Info */}
      <div className="flex flex-row justify-between col-start-1 row-start-1">
        <div className="flex flex-col text-left">
          <h2 className="text-xl">Vancouver</h2>
          <h4 className="text-lg">British Columbia, Canada</h4>
        </div>
        <div className="flex flex-col text-right">
          <h2 className="text-xl">2025-02-25</h2>
          <h4 className="text-lg">02:00 PM</h4>
        </div>
      </div>

      {/* Row 2: Weather Info */}
      <div className="flex flex-row justify-around col-start-1 row-start-2">
        <div className="flex flex-col ">
          <WeatherBoxSmall />
        </div>
        <div className="flex flex-col">
          <WeatherBoxLarge />
        </div>
        <div className="flex flex-col">
          <WeatherBoxLarge />
        </div>
      </div>

      {/* Row 3: Extra Info */}
      <div className="flex flex-row justify-around col-start-1 row-start-3">
        <div className="flex flex-col ">
          <WeatherBoxSmall />
        </div>
        <div className="flex flex-col ">
          <WeatherBoxSmall />
        </div>
        <div className="flex flex-col ">
          <WeatherBoxSmall />
        </div>
        <div className="flex flex-col ">
          <WeatherBoxSmall />
        </div>
      </div>

      {/* Right Column: Map */}
      <div className="bg-white h-full w-full col-start-2 row-span-3"></div>
    </div>
  );
};

export default MainOutput;
