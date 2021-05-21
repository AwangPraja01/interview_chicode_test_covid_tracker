import React from "react";
import { Bar } from "react-chartjs-2";

const GraphDataDisplayTopCountry = ({ casesData, dataType }) => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: casesData.map((item) => item.countryRegion),
    datasets: [
      {
        data: casesData.map((item) =>
          dataType === "confirmed"
            ? item.confirmed
            : dataType === "deaths"
            ? item.deaths
            : item.recovered
        ),
        backgroundColor: "rgb(39,126,255)",
      },
    ],
  };
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default GraphDataDisplayTopCountry;
