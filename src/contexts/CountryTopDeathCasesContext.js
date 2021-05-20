import React, { createContext, useEffect, useState } from "react";

export const CountryTopDeathCasesContext = createContext();

const CountryTopDeathCasesContextProvider = (props) => {
  const [topDeathCases, setTopDeathCases] = useState([]);
  const [totalDeaths, setTotalDeaths] = useState(0);

  useEffect(() => {
    const fetchTopDeathCases = async () => {
      const res = await fetch("https://covid19.mathdro.id/api/deaths");
      const data = await res.json();
      setTopDeathCases(data.slice(0, 7));
    };
    fetchTopDeathCases();
  }, []);

  useEffect(() => {
    const fetchTotalDeath = async () => {
      const res = await fetch("https://covid19.mathdro.id/api");
      const data = await res.json();
      setTotalDeaths(data.deaths.value);
    };
    fetchTotalDeath();
  }, []);

  return (
    <CountryTopDeathCasesContext.Provider
      value={{ topDeathCases, totalDeaths }}>
      {props.children}
    </CountryTopDeathCasesContext.Provider>
  );
};

export default CountryTopDeathCasesContextProvider;
