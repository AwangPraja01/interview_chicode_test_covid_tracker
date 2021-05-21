import React, { useContext } from "react";
import * as Ionicons4 from "react-icons/io";
import { CountryTopRecoveredCasesContext } from "../../contexts/CountryTopRecoveredCasesContext";
import { v4 as uuidv4 } from "uuid";

const DataDisplayTopRecovered = () => {
  const { topRecoveredCountry } = useContext(CountryTopRecoveredCasesContext);
  return (
    <>
      <div>
        <table className='w-full'>
          <thead>
            <tr className='border-black border-b-2'>
              <th className='text-left'>Country Name</th>
              <th className='text-right'>Country Code</th>
              <th className='text-right'>Recovered Patient</th>
            </tr>
          </thead>
          <tbody>
            {topRecoveredCountry.map((item) => (
              <tr key={uuidv4()} className='border-black border-b-2'>
                <td className='py-1 text-left'>{item.countryRegion}</td>
                <td className='py-1 text-right'>{item.iso3}</td>
                <td className='py-1 text-right'>{item.recovered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='absolute w-full px-4 py-1 bottom-0 left-0 flex flex-row justify-between items-center border-black border-t-2'>
        <div className='flex flex-row justify-start items-center'>
          <span>Last 7 days</span>
          <span>
            <Ionicons4.IoMdArrowDropdown />
          </span>
        </div>
        <div>
          <span>User Report</span>
        </div>
      </div>
    </>
  );
};

export default DataDisplayTopRecovered;
