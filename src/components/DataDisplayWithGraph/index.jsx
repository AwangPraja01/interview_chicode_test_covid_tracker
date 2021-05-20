import React, { useContext, useState } from "react";
import Graph from "./Graph";
import * as Ionicons4 from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { CountryNamesContext } from "../../contexts/CountryNamesContext";
import { CountryContext } from "../../contexts/CountryContext";
import { CountryCasesContext } from "../../contexts/CountryCasesContext";

const DataDisplayWithGraph = () => {
  const { countryNames } = useContext(CountryNamesContext);
  const { handleChangeCountry, country } = useContext(CountryContext);
  const { countryCases } = useContext(CountryCasesContext);
  const [dataType, setDataType] = useState("confirmed");

  return (
    <>
      <div className='w-full flex flex-row justify-between items-start mb-3 '>
        <div
          onClick={() => setDataType("confirmed")}
          className={`data-display-container ${
            dataType === "confirmed" ? "border-green-500" : "border-transparent"
          }`}>
          <span>Confirmed</span>
          <span className='text-2xl'>{countryCases.confirmed.value}</span>
        </div>
        <div
          onClick={() => setDataType("deaths")}
          className={`data-display-container mx-2 ${
            dataType === "deaths" ? "border-green-500" : "border-transparent"
          }`}>
          <span>Deaths</span>
          <span className='text-2xl'>{countryCases.deaths.value}</span>
        </div>
        <div
          onClick={() => setDataType("recovered")}
          className={`data-display-container ${
            dataType === "recovered" ? "border-green-500" : "border-transparent"
          }`}>
          <span>Recovered</span>
          <span className='text-2xl'>{countryCases.recovered.value}</span>
        </div>
      </div>

      <div className='px-2 mb-3'>
        <Graph />
      </div>

      <div className='flex flex-row items-center justify-between border-t-2 border-black'>
        <div className='flex flex-row justify-start items-center p-2 mr-2'>
          <span>Last 7 days</span>
          <span>
            <Ionicons4.IoMdArrowDropdown />
          </span>
        </div>
        <div>
          <select
            name='country_name'
            id='country_name'
            className='focus:outline-none m-2'
            onChange={handleChangeCountry}
            value={country}>
            {countryNames.map((item) => (
              <option key={uuidv4()} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default DataDisplayWithGraph;
