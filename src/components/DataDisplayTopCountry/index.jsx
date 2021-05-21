import React, { useContext, useState } from "react";
import GraphDataDisplayTopCountry from "./GraphDataDisplayTopCountry";
import { Covid19Context } from "../../contexts/Covid19Context";

const DataDisplayTopCountry = () => {
  const { topDeathCountry, topRecoveredCountry, topConfirmedCountry } =
    useContext(Covid19Context);
  const [dataType, setDataType] = useState("confirmed");
  return (
    <>
      <div className='flex-1 mb-5'>
        <span className='capitalize text-lg font-semibold text-gray-800'>
          countries with the highest number of cases
        </span>
      </div>
      <div className='bg-white flex-1 w-full  overflow-hidden'>
        <div className='w-full flex flex-row items-start mb-3'>
          <div
            onClick={() => setDataType("confirmed")}
            className={`cursor-pointer  p-2 border-t-4 ${
              dataType === "confirmed"
                ? "border-green-500"
                : "border-transparent"
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
              dataType === "recovered"
                ? "border-green-500"
                : "border-transparent"
            }`}>
            <span>Recovered</span>
          </div>
        </div>
        <div className='px-3 mb-3'>
          <GraphDataDisplayTopCountry
            casesData={
              dataType === "confirmed"
                ? topConfirmedCountry
                : dataType === "deaths"
                ? topDeathCountry
                : topRecoveredCountry
            }
            dataType={dataType}
          />
        </div>
        <div className='border-t-2 border-gray-400 p-2'>
          <select
            name='time_span'
            id='time_span'
            className='focus:outline-none cursor-pointer'>
            <option value='last7days'>Last 7 days</option>
            <option value='last7days'>Last 30 days</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default DataDisplayTopCountry;
