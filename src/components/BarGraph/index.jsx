import React, { useContext, useState } from "react";
import Graph from "./Graph";
import * as Ionicons4 from "react-icons/io";
import { CountryTopDeathCasesContext } from "../../contexts/CountryTopDeathCasesContext";
import { CountryTopRecoveredCasesContext } from "../../contexts/CountryTopRecoveredCasesContext";
import { CountryTopConfirmedCasesContext } from "../../contexts/CountryTopConfirmedCasesContext";

const BarGraph = () => {
  const { topDeathCases } = useContext(CountryTopDeathCasesContext);
  const { topRecoveredCountry } = useContext(CountryTopRecoveredCasesContext);
  const { topConfirmedCountry } = useContext(CountryTopConfirmedCasesContext);
  const [dataType, setDataType] = useState("confirmed");
  return (
    <>
      <div className='w-full flex flex-row items-start mb-3'>
        <div
          onClick={() => setDataType("confirmed")}
          className={`cursor-pointer  p-2 border-t-4 ${
            dataType === "confirmed" ? "border-green-500" : "border-transparent"
          }`}>
          <span>Confirmed</span>
        </div>
        <div
          onClick={() => setDataType("deaths")}
          className={`cursor-pointer  mx-2 p-2 border-t-4 ${
            dataType === "deaths" ? "border-green-500" : "border-transparent"
          }`}>
          <span>Deaths</span>
        </div>
        <div
          onClick={() => setDataType("recovered")}
          className={`cursor-pointer  p-2 border-t-4 ${
            dataType === "recovered" ? "border-green-500" : "border-transparent"
          }`}>
          <span>Recovered</span>
        </div>
      </div>
      <div className='px-3 mb-3'>
        <Graph
          casesData={
            dataType === "confirmed"
              ? topConfirmedCountry
              : dataType === "deaths"
              ? topDeathCases
              : topRecoveredCountry
          }
          dataType={dataType}
        />
      </div>
      <div className='flex flex-row justify-start items-center border-t-2 border-black p-2'>
        <span>Last 7 days</span>
        <span>
          <Ionicons4.IoMdArrowDropdown />
        </span>
      </div>
    </>
  );
};

export default BarGraph;
