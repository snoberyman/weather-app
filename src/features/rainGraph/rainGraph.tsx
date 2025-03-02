import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import WeatherBoxMain from "../../components/weatherBox/weatherBoxMain";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Tooltip } from "react-tooltip";
import { ForecastDay, HourData } from "../../types/weatherTypes";

function RainGraph({ isCalled }: { isCalled: boolean }) {
  const weather = useSelector((state: RootState) => state.weather);

  const rainData = weather.forecast.forecastday.map((day: ForecastDay) =>
    day.hour.map((hour: HourData, index: number) => ({
      x: `${index}:00`, // Hour label
      y: hour.precip_mm, // Rainfall value
    }))
  );

  const options: ApexOptions = {
    chart: {
      type: "heatmap",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    title: {
      text: "Rainfall Heatmap Over Three Days",
      align: "center",
      style: { fontSize: "20px", fontWeight: "bold" },
    },
    xaxis: {
      title: {
        text: "Hour of the Day",
        style: { fontWeight: "normal", fontSize: "16px" },
      },
      categories: Array.from({ length: 24 }, (_, i) => `${i}:00`), // 24-hour labels
    },
    yaxis: {
      title: {
        text: "Day of the Week",
        style: { fontWeight: "normal", fontSize: "16px" },
      },
      labels: { show: true },
    },
    dataLabels: { enabled: false },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            { from: 0, to: 2.5, color: "#B0E0E6", name: "Light Rain" }, // Light blue
            { from: 2.6, to: 7.6, color: "#00A8FF", name: "Moderate Rain" }, // Blue
            { from: 7.7, to: 50, color: "#FF5733", name: "Heavy Rain" }, // Orange
            { from: 50.1, to: 100, color: "#C70039", name: "Very Heavy Rain" }, // Red
            { from: 100.1, to: 500, color: "#900C3F", name: "Extreme Rain" }, // Dark Red
          ],
        },
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          title: { style: { fontSize: "18px", fontWeight: "normal" } },
          xaxis: {
            title: {
              text: "Hour of the Day",
              style: { fontWeight: "normal", fontSize: "12px" },
            },
          },
          yaxis: {
            title: {
              text: "Day of the Week",
              style: { fontWeight: "normal", fontSize: "12px" },
            },
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          title: { style: { fontSize: "14px" } },
        },
      },
    ],
  };

  // Prepare series data for the heatmap
  const series = [
    {
      name: weather.forecast.forecastday[2].date,
      data: rainData[2],
    },
    {
      name: weather.forecast.forecastday[1].date,
      data: rainData[1],
    },
    {
      name: weather.forecast.forecastday[0].date,
      data: rainData[0],
    },
  ];

  const tooltipContent = "";

  return (
    <WeatherBoxMain isCalled={isCalled}>
      <div className="p-8 bg-white relative">
        <ApexCharts
          options={options}
          series={series}
          type="heatmap"
          height={350}
        />
        <button
          className="bg-primary-blue text-white p-2 m-2 absolute top-6 max-sm:top-0 max-sm:hidden  max-sm:text-xs rounded-md cursor-pointer text-sm text-left"
          data-tooltip-id="info-tooltip"
          data-tooltip-content={tooltipContent}
          data-tooltip-place="bottom"
        >
          info
          <Tooltip
            html="Light Rain: <2.5 mm/hour (Drizzle or light showers) <br />
            Moderate Rain: 2.5 - 7.6 mm/hour (Steady rain, noticeable but not extreme) <br /> 
            Heavy Rain: 7.6 - 50 mm/hour (Strong downpour, can cause puddles or minor flooding) <br />
            Very Heavy Rain: 50 - 100 mm/hour (Torrential rain, potential flash flooding) <br />"
            id="info-tooltip"
          />
        </button>
      </div>
    </WeatherBoxMain>
  );
}

export default RainGraph;
