import { Line } from "react-chartjs-2";
import React from "react";

const GraphDataDisplayPerCountry = () => {
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday ",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(56,123,255)",
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
      <Line data={data} options={options} />
    </>
  );
};

export default GraphDataDisplayPerCountry;
