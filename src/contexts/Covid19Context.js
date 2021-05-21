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
    const fetchCountryNames = async () => {
      const res = await fetch("https://covid19.mathdro.id/api/countries");
      const data = await res.json();
      setCountryNames(data.countries);
    };
    fetchCountryNames();
  }, []);

  useEffect(() => {
    const fetchCountryCases = async () => {
      const res = await fetch(
        `https://covid19.mathdro.id/api/countries/${selectedCountry}`
      );
      const data = await res.json();
      setCountryCasesPerCountry(data);
    };
    fetchCountryCases();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchTopConfirmedCountry = async () => {
      const res = await fetch("https://covid19.mathdro.id/api/confirmed");
      const data = await res.json();
      setTopConfirmedCountry(data.slice(0, 10));
    };
    fetchTopConfirmedCountry();
  }, []);

  useEffect(() => {
    const fetchTopRecoveredCountry = async () => {
      const res = await fetch("https://covid19.mathdro.id/api/recovered");
      const data = await res.json();
      setTopRecoveredCountry(data.slice(0, 10));
    };
    fetchTopRecoveredCountry();
  }, []);

  useEffect(() => {
    const fetchTopDeathCountry = async () => {
      const res = await fetch("https://covid19.mathdro.id/api/deaths");
      const data = await res.json();
      setTopDeathCountry(data.slice(0, 10));
    };
    fetchTopDeathCountry();
  }, []);

  useEffect(() => {
    const fetchTotalDeaths = async () => {
      const res = await fetch("https://covid19.mathdro.id/api");
      const data = await res.json();
      setTotalDeaths(data.deaths.value);
    };
    fetchTotalDeaths();
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
