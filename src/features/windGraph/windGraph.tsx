import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import WeatherBoxMain from "../../components/weatherBox/weatherBoxMain";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Tooltip } from "react-tooltip";
import { ForecastDay, HourData } from "../../types/weatherTypes";

function WindGraph({
  isCalled,
  unitSystem,
}: {
  isCalled: boolean;
  unitSystem: string;
}) {
  const weather = useSelector((state: RootState) => state.weather);

  const windData = weather.forecast.forecastday.map(
    (day: ForecastDay) =>
      day.hour.map((hour: HourData) =>
        unitSystem === "Metric" ? hour.wind_kph : hour.wind_mph
      ) // Get precipitation data for each hour
  );

  const dayData = {
    // Prepare data for the area chart
    day1: windData[0],
    day2: windData[1],
    day3: windData[2],
  };

  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false, // Disable the toolbar
      },
      zoom: {
        enabled: false, // Disable zooming
      },
    },
    dataLabels: {
      enabled: false, // Disable the data labels
    },
    title: {
      text: "Wind Speed Trends Over Three Days",
      style: {
        fontSize: "24px",
        fontWeight: "bold",
      },
      align: "center",
    },
    xaxis: {
      categories: Array.from({ length: 24 }, (_, i) => `${i}:00`), // Hourly data (24 hours)
    },
    yaxis: {
      title: {
        text: `wind speed in ${unitSystem === "Metric" ? "(km/h)" : "(mph)"}`,
        style: {
          fontSize: "16px", // Set the title font size
          fontWeight: "normal",
        },
      },
    },
    fill: {
      opacity: 0.3, // Make the area chart slightly transparent
    },
    stroke: {
      curve: "smooth", // Smooth line for the area chart
    },
    colors: ["#00A8FF", "#FF5733", "#28A745"], // Customize the colors for each series
    responsive: [
      {
        breakpoint: 768, // for screens with width less than 768px
        options: {
          chart: {
            width: "100%", // chart will occupy full width
          },
          title: {
            style: {
              fontSize: "18px",
              fontWeight: "normal",
            },
          },
          yaxis: {
            title: {
              text: "Wind Speed Trends Over Three Days",
              style: {
                fontSize: "10px", // Set the title font size
                fontWeight: "normal",
              },
            },
          },
          xaxis: {
            labels: {
              rotate: -90, // Rotate x-axis labels for readability
            },
          },
        },
      },
      {
        breakpoint: 480, // for very small screens (mobile)
        options: {
          chart: {
            width: "100%",
          },
          title: {
            style: {
              fontSize: "12px",
            },
          },
          xaxis: {
            labels: {
              rotate: -45, // Rotate for smaller screens
            },
          },
        },
      },
    ],
  };

  // Prepare series data for the area chart
  const series = [
    {
      name: weather.forecast.forecastday[0].date,
      data: dayData.day1,
    },
    {
      name: weather.forecast.forecastday[1].date,
      data: dayData.day2,
    },
    {
      name: weather.forecast.forecastday[2].date,
      data: dayData.day3,
    },
  ];

  const tooltipContent = "";

  return (
    <WeatherBoxMain isCalled={isCalled}>
      <div className="p-8 bg-white relative">
        <ApexCharts
          options={options}
          series={series}
          type="area"
          height={350}
        />
        <button
          className="bg-primary-blue text-white p-2 m-2 absolute top-6 max-sm:top-0 max-sm:hidden  max-sm:text-xs rounded-md cursor-pointer text-sm text-left"
          data-tooltip-id="wind-info-tooltip"
          data-tooltip-content={tooltipContent}
          data-tooltip-place="bottom"
        >
          info
          <Tooltip
            html="Light Wind (0 - 19 km/h) → Calm to Gentle Breeze (barely noticeable, rustling leaves) <br />
                Moderate Wind (20 - 49 km/h) → Strong Breeze (small trees sway, resistance when walking) <br /> 
                Strong Wind (50 - 88 km/h) → Near Gale to Severe Gale (difficult to walk, possible minor damage) <br /> 
                Severe Wind (89+ km/h) → Storm to Hurricane (widespread damage, dangerous conditions)"
            id="wind-info-tooltip"
          />
        </button>
      </div>
    </WeatherBoxMain>
  );
}

export default WindGraph;
