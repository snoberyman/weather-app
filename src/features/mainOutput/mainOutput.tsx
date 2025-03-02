import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import WeatherBoxMain from "../../components/weatherBox/weatherBoxMain";
import WeatherBoxSmall from "../../components/weatherBox/weatherBoxSmall";
import WeatherBoxLarge from "../../components/weatherBox/weatherBoxLarge";
import Map from "../../components/weatherBox/map";

const MainOutput = ({
  isCalled,
  unitSystem,
}: {
  isCalled: boolean;
  unitSystem: string;
}) => {
  const weather = useSelector((state: RootState) => state.weather);

  const localtime = weather.location.localtime;
  const dateTime = localtime?.split(" "); // get date and time
  const date = dateTime[0];
  let time = dateTime[1] || "00:00"; // set default time to 00:00

  const [hour, minute] = time.split(":").map(Number); // get hour and minute
  const period = hour >= 12 ? "PM" : "AM"; // set AM or PM
  const formattedHour = hour % 12 || 12; // Convert 0 to 12
  time = `${formattedHour}:${minute} ${period}`;

  return (
    <WeatherBoxMain isCalled={isCalled}>
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_1fr] grid-rows-[auto_auto_auto] gap-10 p-8 justify-between">
        {/* Location and date info */}
        <div className="grid grid-cols-2 grid-rows-1 gap-4 col-start-1 row-start-1 ">
          <div className="flex flex-col text-left ">
            <h2 className="text-xl/10 max-sm:text-sm">
              {weather.location.name}
            </h2>
            <h4 className="text-lg max-sm:text-sm">
              {weather.location.region}
              {weather.location.region ? "," : ""} {weather.location.country}
            </h4>
          </div>
          <div className="flex flex-col text-right">
            <h2 className="text-xl/10 max-sm:text-sm">{date}</h2>
            <h4 className="text-lg max-sm:text-sm">{time}</h4>
          </div>
        </div>
        {/* Main weather info */}
        <div className=" items-start grid xl:grid-cols-[1fr_2fr_2fr] gap-20 col-start-1 row-start-2 ">
          <div className="flex flex-col ">
            <WeatherBoxSmall
              title={"Current temp."}
              temp={
                unitSystem === "Metric"
                  ? weather.current.temp_c + "°C"
                  : weather.current.temp_f + "°F"
              }
            />
          </div>
          <div className="flex flex-col ">
            <WeatherBoxLarge
              text={weather.current.condition.text}
              icon={weather.current.condition.icon}
            />
          </div>
          <div className="flex flex-col ">
            <WeatherBoxLarge percentage={weather.current.humidity} />
          </div>
        </div>
        {/* Hourly temperature Info */}
        <div className="grid grid-cols-2 xl:grid-cols-4  gap-20 col-start-1 row-start-3 ">
          <div className="flex flex-col">
            <WeatherBoxSmall
              title={"Temp @ 06 AM"}
              temp={
                unitSystem === "Metric"
                  ? weather?.forecast?.forecastday[0]?.hour[6]?.temp_c + "°C"
                  : weather?.forecast?.forecastday[0]?.hour[6]?.temp_f + "°F"
              }
            />
          </div>
          <div className="flex flex-col">
            <WeatherBoxSmall
              title={"Temp @ 12 PM"}
              temp={
                unitSystem === "Metric"
                  ? weather?.forecast?.forecastday[0]?.hour[12]?.temp_c + "°C"
                  : weather?.forecast?.forecastday[0]?.hour[12]?.temp_f + "°F"
              }
            />
          </div>
          <div className="flex flex-col">
            <WeatherBoxSmall
              title={"Temp @ 03 PM"}
              temp={
                unitSystem === "Metric"
                  ? weather?.forecast?.forecastday[0]?.hour[15]?.temp_c + "°C"
                  : weather?.forecast?.forecastday[0]?.hour[15]?.temp_f + "°F"
              }
            />
          </div>
          <div className="flex flex-col">
            <WeatherBoxSmall
              title={"Temp @ 07 PM"}
              temp={
                unitSystem === "Metric"
                  ? weather?.forecast?.forecastday[0]?.hour[15]?.temp_c + "°C"
                  : weather?.forecast?.forecastday[0]?.hour[15]?.temp_f + "°F"
              }
            />
          </div>
        </div>
        {/* Map */}
        <div className=" col-start-1 xl:col-start-2 row-span-3">
          <Map
            latitude={weather.location.lat}
            longitude={weather.location.lon}
          />
        </div>
      </div>
    </WeatherBoxMain>
  );
};

export default MainOutput;
