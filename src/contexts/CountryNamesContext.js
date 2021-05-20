import React, { createContext, useEffect, useState } from "react";

export const CountryNamesContext = createContext();

const CountryNamesContextProvider = (props) => {
  const [countryNames, setCountryNames] = useState([]);

  useEffect(() => {
    const fetchCountryNames = async () => {
      const res = await fetch("https://covid19.mathdro.id/api/countries");
      const data = await res.json();
      setCountryNames(data.countries);
    };
    fetchCountryNames();
  }, []);

  return (
    <CountryNamesContext.Provider value={{ countryNames }}>
      {props.children}
    </CountryNamesContext.Provider>
  );
};

export default CountryNamesContextProvider;
