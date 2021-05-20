import React, { createContext, useContext, useEffect, useState } from "react";
import { CountryContext } from "./CountryContext";

export const CountryCasesContext = createContext();

const CountryCasesContextProvider = (props) => {
  const [countryCases, setCountryCases] = useState({
    deaths: { value: 0 },
    recovered: { value: 0 },
    confirmed: { value: 0 },
  });
  const { country } = useContext(CountryContext);

  useEffect(() => {
    const fetchCountryCases = async () => {
      const res = await fetch(
        `https://covid19.mathdro.id/api/countries/${country}`
      );
      const data = await res.json();
      setCountryCases(data);
    };
    fetchCountryCases();
  }, [country]);
  return (
    <CountryCasesContext.Provider value={{ countryCases }}>
      {props.children}
    </CountryCasesContext.Provider>
  );
};

export default CountryCasesContextProvider;
