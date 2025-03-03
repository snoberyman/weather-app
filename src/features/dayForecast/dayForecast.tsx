import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import WeatherBoxMain from "../../components/weatherBox/weatherBoxMain";
import WeatherBoxSmall from "../../components/weatherBox/weatherBoxSmall";
import WeatherBoxLarge from "../../components/weatherBox/weatherBoxLarge";

const DayForecast = ({
  isCalled,
  unitSystem,
}: {
  isCalled: boolean;
  unitSystem: string;
}) => {
  const weather = useSelector((state: RootState) => state.weather);
  const forecast = weather.forecast.forecastday;

  const forecastDay2 = forecast[1];
  const forecastDay3 = forecast[2];

  return (
    <WeatherBoxMain isCalled={isCalled}>
      <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-1 gap-6 p-8">
        {/* Column 1 (Forecast Day 2) */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Date at the top */}
          <h2 className="text-lg max-sm:text-sm">{forecastDay2.date}</h2>
          {/* Weather info at the bottom */}
          <div className="flex flex-row justify-center items-center gap-4">
            <WeatherBoxSmall
              title="Avg Temp."
              temp={
                unitSystem === "Metric"
                  ? forecastDay2.day.avgtemp_c + "°C"
                  : forecastDay2.day.avgtemp_f + "°F"
              }
            />
            <WeatherBoxLarge
              text={forecastDay2.day.condition.text}
              icon={forecastDay2.day.condition.icon}
            />
          </div>
        </div>

        {/* Column 2 (Forecast Day 3) */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Date at the top */}
          <h2 className="text-lg max-sm:text-sm">{forecastDay3.date}</h2>

          {/* Weather info at the bottom (side by side) */}
          <div className="flex flex-row justify-center items-center gap-4">
            <WeatherBoxSmall
              title="Avg Temp."
              temp={
                unitSystem === "Metric"
                  ? forecastDay3.day.avgtemp_c + "°C"
                  : forecastDay3.day.avgtemp_f + "°F"
              }
            />
            <WeatherBoxLarge
              text={forecastDay3.day.condition.text}
              icon={forecastDay3.day.condition.icon}
            />
          </div>
        </div>
      </div>
    </WeatherBoxMain>
  );
};

export default DayForecast;
