import React, { createContext, useEffect, useState } from "react";

export const CountryTopRecoveredCasesContext = createContext();

const CountryTopRecoveredCasesContextProvider = (props) => {
  const [topRecoveredCountry, setTopRecoveredCountry] = useState([]);

  useEffect(() => {
    const fetchTopRecoveredCountry = async () => {
      const res = await fetch("https://covid19.mathdro.id/api/recovered");
      const data = await res.json();
      setTopRecoveredCountry(data.slice(0, 10));
    };

    fetchTopRecoveredCountry();
  }, []);
  return (
    <CountryTopRecoveredCasesContext.Provider value={{ topRecoveredCountry }}>
      {props.children}
    </CountryTopRecoveredCasesContext.Provider>
  );
};

export default CountryTopRecoveredCasesContextProvider;
