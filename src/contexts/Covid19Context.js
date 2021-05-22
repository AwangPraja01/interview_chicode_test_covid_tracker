import React, { createContext, useEffect, useState } from "react";

export const Covid19Context = createContext();

const Covid19ContextProvider = (props) => {
  const [countryNames, setCountryNames] = useState([]);
  const [topConfirmedCountry, setTopConfirmedCountry] = useState([]);
  const [topRecoveredCountry, setTopRecoveredCountry] = useState([]);
  const [topDeathCountry, setTopDeathCountry] = useState([]);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("afghanistan");
  const [countryCasesPerCountry, setCountryCasesPerCountry] = useState({
    deaths: { value: 0 },
    recovered: { value: 0 },
    confirmed: { value: 0 },
  });

  const handleChangeSelectCountry = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    let active = true;

    const fetchCountryNames = async () => {
      const res = await fetch("https://covid19.mathdro.id/api/countries");
      const data = await res.json();
      if (active) {
        setCountryNames(data.countries);
      }
    };

    fetchCountryNames();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;
    const fetchCountryCases = async () => {
      const res = await fetch(
        `https://covid19.mathdro.id/api/countries/${selectedCountry}`
      );
      const data = await res.json();
      if (active) {
        setCountryCasesPerCountry(data);
      }
    };
    fetchCountryCases();
    return () => {
      active = false;
    };
  }, [selectedCountry]);

  useEffect(() => {
    let active = true;

    const fetchTopConfirmedCountry = async () => {
      const res = await fetch("https://covid19.mathdro.id/api/confirmed");
      const data = await res.json();
      if (active) {
        setTopConfirmedCountry(data.slice(0, 10));
      }
    };

    fetchTopConfirmedCountry();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;
    const fetchTopRecoveredCountry = async () => {
      const res = await fetch("https://covid19.mathdro.id/api/recovered");
      const data = await res.json();
      if (active) {
        setTopRecoveredCountry(data.slice(0, 10));
      }
    };
    fetchTopRecoveredCountry();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;
    const fetchTopDeathCountry = async () => {
      const res = await fetch("https://covid19.mathdro.id/api/deaths");
      const data = await res.json();
      if (active) {
        setTopDeathCountry(data.slice(0, 10));
      }
    };
    fetchTopDeathCountry();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    const fetchTotalDeaths = async () => {
      const res = await fetch("https://covid19.mathdro.id/api");
      const data = await res.json();
      if (active) {
        setTotalDeaths(data.deaths.value);
      }
    };

    fetchTotalDeaths();
    return () => {
      active = false;
    };
  }, []);

  return (
    <Covid19Context.Provider
      value={{
        countryNames,
        topConfirmedCountry,
        topRecoveredCountry,
        topDeathCountry,
        selectedCountry,
        totalDeaths,
        countryCasesPerCountry,
        handleChangeSelectCountry,
      }}>
      {props.children}
    </Covid19Context.Provider>
  );
};

export default Covid19ContextProvider;
