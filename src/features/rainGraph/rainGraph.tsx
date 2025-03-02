import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import WeatherBoxMain from "../../components/weatherBox/weatherBoxMain";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ForecastDay, HourData } from "../../types/weatherTypes";

function RainGraph({ isCalled }: { isCalled: boolean }) {
  const weather = useSelector((state: RootState) => state.weather);

  const rainData = weather.forecast.forecastday.map((day: ForecastDay) =>
    day.hour.map((hour: HourData) => hour.precip_mm)
  );

  const dayData = {
    day1: rainData[0],
    day2: rainData[1],
    day3: rainData[2],
  };

  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false, // Disable the toolbar
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false, // Disable the data labels
    },
    title: {
      text: "Chance of Rain for Three Days",
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
        text: "precipitation in millimeters (mm)",
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
            height: 300, // chart height for small screens
          },
          title: {
            style: {
              fontSize: "18px",
              fontWeight: "normal",
            },
          },
          yaxis: {
            title: {
              text: "precipitation in millimeters (mm)",
              style: {
                fontSize: "12px", // Set the title font size
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
            height: 250, // smaller height for very small screens
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

  return (
    <WeatherBoxMain isCalled={isCalled}>
      <div className="p-8 bg-white">
        <h3>Rain Chance Area Chart</h3>
        <ApexCharts
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </WeatherBoxMain>
  );
}

export default RainGraph;
