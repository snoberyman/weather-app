import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import WeatherBoxSmall from "../../components/weatherBox/weatherBoxSmall";
import WeatherBoxLarge from "../../components/weatherBox/weatherBoxLarge";
import TempBox from "../../components/weatherBox/tempBox";

const MainOutput = () => {
  const weather = useSelector((state: RootState) => state.weather);
  return (
    <div className="max-sm:mt-15 max-sm:mb-25 mt-30 mb-50 bg-primary-blue w-[60vw] max-sm:w-[80vw] h-auto border-2 border-white grid grid-cols-1 xl:grid-cols-[3fr_1fr] grid-rows-[auto_auto_auto] gap-10 p-8 justify-between ">
      {/* Location and date info */}
      <div className="grid grid-cols-2 grid-rows-1 gap-4 col-start-1 row-start-1 ">
        <div className="flex flex-col text-left ">
          <h2 className="text-xl/10 max-sm:text-sm">{weather.location.name}</h2>
          <h4 className="text-lg max-sm:text-sm">
            {weather.location.region}
            {weather.location.region ? "," : ""} {weather.location.country}
          </h4>
        </div>
        <div className="flex flex-col text-right">
          <h2 className="text-xl/10 max-sm:text-sm">2025-02-25</h2>
          <h4 className="text-lg max-sm:text-sm">02:00 PM</h4>
        </div>
      </div>
      {/* Main weather info */}
      <div className=" items-start grid xl:grid-cols-[1fr_2fr_2fr] gap-20 col-start-1 row-start-2 ">
        <div className="flex flex-col ">
          <TempBox tempValue={weather.current.temp_c} />
        </div>
        <div className="flex flex-col ">
          <WeatherBoxLarge />
        </div>
        <div className="flex flex-col ">
          <WeatherBoxLarge />
        </div>
      </div>
      {/* Hourly temperature Info */}
      <div className="grid grid-cols-2 xl:grid-cols-4  gap-20 col-start-1 row-start-3 ">
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
      <div className="bg-white h-60 xl:h-full w-full col-start-1 xl:col-start-2 row-span-3"></div>
    </div>
  );
};

export default MainOutput;
