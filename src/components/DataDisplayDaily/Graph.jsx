import React from "react";
import { Bar } from "react-chartjs-2";

const labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday ",
  "Friday",
  "Saturday",
  "Sunday",
];

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
  labels: labels,
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "rgba(255,255,255,0.8)",
    },
  ],
};

const Graph = () => {
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default Graph;
