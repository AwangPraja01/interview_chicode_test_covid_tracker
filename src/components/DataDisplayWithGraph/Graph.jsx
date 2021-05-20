import { Line } from "react-chartjs-2";
import React from "react";

const Graph = () => {
  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday ",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <>
      <Line height={180} data={data} options={options} />
    </>
  );
};

export default Graph;
