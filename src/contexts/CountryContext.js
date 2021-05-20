import React, { createContext, useState } from "react";

export const CountryContext = createContext();

const CountryContextProvider = (props) => {
  const [country, setCountry] = useState("afghanistan");

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  return (
    <CountryContext.Provider value={{ country, handleChangeCountry }}>
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryContextProvider;
