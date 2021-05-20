import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { CountryTopDeathCasesContext } from "../../contexts/CountryTopDeathCasesContext";

const Graph = () => {
  const { topDeathCases } = useContext(CountryTopDeathCasesContext);
  const labels = topDeathCases.map((item) => item.countryRegion);

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
        data: topDeathCases.map((item) => item.deaths),
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

export default Graph;
