import React, { useContext, useState } from "react";
import GraphDataDisplayPerCountry from "./GraphDataDisplayPerCountry";
import { v4 as uuidv4 } from "uuid";
import { Covid19Context } from "../../contexts/Covid19Context";

const DataDisplayPerCountry = () => {
  const {
    countryNames,
    selectedCountry,
    handleChangeSelectCountry,
    countryCasesPerCountry,
  } = useContext(Covid19Context);

  const [dataType, setDataType] = useState("confirmed");

  return (
    <div id='data-display-per-country-container' className='relative'>
      <div className='w-full flex flex-row justify-between items-start mb-3'>
        <div
          onClick={() => setDataType("confirmed")}
          className={`data-display-container ${
            dataType === "confirmed" ? "border-green-500" : "border-transparent"
          }`}>
          <span>Confirmed</span>
          <span className='text-2xl'>
            {countryCasesPerCountry.confirmed.value}
          </span>
        </div>

        <div
          onClick={() => setDataType("deaths")}
          className={`data-display-container mx-2 ${
            dataType === "deaths" ? "border-green-500" : "border-transparent"
          }`}>
          <span>Deaths</span>
          <span className='text-2xl'>
            {countryCasesPerCountry.deaths.value}
          </span>
        </div>

        <div
          onClick={() => setDataType("recovered")}
          className={`data-display-container ${
            dataType === "recovered" ? "border-green-500" : "border-transparent"
          }`}>
          <span>Recovered</span>
          <span className='text-2xl'>
            {countryCasesPerCountry.recovered.value}
          </span>
        </div>
      </div>

      <div className='px-2'>
        <GraphDataDisplayPerCountry />
      </div>

      <div className='absolute bottom-0 left-0 w-full flex flex-row items-center justify-between border-t-2 border-gray-400'>
        <div>
          <select
            name='time_span'
            id='time_span'
            className='focus:outline-none m-2 cursor-pointer'>
            <option value='last7days'>Last 7 days</option>
            <option value='last7days'>Last 30 days</option>
          </select>
        </div>

        <div>
          <select
            name='country_name'
            id='country_name'
            className='focus:outline-none m-2 cursor-pointer'
            onChange={handleChangeSelectCountry}
            value={selectedCountry}>
            {countryNames.map((item) => (
              <option key={uuidv4()} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DataDisplayPerCountry;
