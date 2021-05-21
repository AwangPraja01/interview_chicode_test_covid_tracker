import React, { createContext, useEffect, useState } from "react";

export const CountryTopConfirmedCasesContext = createContext();

const CountryTopConfirmedCasesContextProvider = (props) => {
  const [topConfirmedCountry, setTopConfirmedCountry] = useState([]);

  useEffect(() => {
    const fetchTopConfirmedCountry = async () => {
      const res = await fetch("https://covid19.mathdro.id/api/confirmed");
      const data = await res.json();
      setTopConfirmedCountry(data.slice(0, 10));
    };

    fetchTopConfirmedCountry();
  }, []);
  return (
    <CountryTopConfirmedCasesContext.Provider value={{ topConfirmedCountry }}>
      {props.children}
    </CountryTopConfirmedCasesContext.Provider>
  );
};

export default CountryTopConfirmedCasesContextProvider;
