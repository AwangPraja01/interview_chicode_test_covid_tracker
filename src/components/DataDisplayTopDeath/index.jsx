import React, { useContext } from "react";
import { CountryTopDeathCasesContext } from "../../contexts/CountryTopDeathCasesContext";
import Graph from "./Graph";
import { v4 as uuidv4 } from "uuid";

const DataDisplayTopDeath = () => {
  const { topDeathCases, totalDeaths } = useContext(
    CountryTopDeathCasesContext
  );

  return (
    <>
      <div className='flex flex-col justify-center items-start mb-5'>
        <span>Total Patients Died</span>
        <span className='text-4xl'>{totalDeaths}</span>
      </div>

      <div className='mb-5'>
        <Graph />
      </div>

      <div id='table-top-death' className='h-48 overflow-y-auto'>
        <div className='flex flex-row justify-between items-center border-black border-b-2 pb-1'>
          <span>Most cases of death country</span>
          <span>Death patient</span>
        </div>
        <div id='table-top-active'>
          {topDeathCases.map((item) => (
            <div key={uuidv4()} className='top-deaths-cases-item'>
              <span>{item.countryRegion}</span>
              <span>{item.deaths}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DataDisplayTopDeath;
