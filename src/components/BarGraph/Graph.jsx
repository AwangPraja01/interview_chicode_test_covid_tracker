import React from "react";

import { Bar } from "react-chartjs-2";

const Graph = ({ casesData, dataType }) => {
  const labels = casesData.map((item) => item.countryRegion);

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
    labels: labels,
    datasets: [
      {
        data: casesData.map((item) =>
          dataType === "confirmed"
            ? item.confirmed
            : dataType === "deaths"
            ? item.deaths
            : item.recovered
        ),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default Graph;
