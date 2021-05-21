import React from "react";
import { Bar } from "react-chartjs-2";

const GraphDataDisplayTopDeath = ({ topDeathCountry }) => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: topDeathCountry.map((item) => item.countryRegion),
    datasets: [
      {
        data: topDeathCountry.map((item) => item.deaths),
        backgroundColor: "rgba(255,255,255,0.8)",
      },
    ],
  };
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default GraphDataDisplayTopDeath;
