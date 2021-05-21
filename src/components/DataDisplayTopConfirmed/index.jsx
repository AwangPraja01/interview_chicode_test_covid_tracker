import React, { useContext } from "react";
import * as Ionicons4 from "react-icons/io";
import { CountryTopConfirmedCasesContext } from "../../contexts/CountryTopConfirmedCasesContext";
import { v4 as uuidv4 } from "uuid";

const DataDisplayTopConfirmed = () => {
  const { topConfirmedCountry } = useContext(CountryTopConfirmedCasesContext);
  console.log(topConfirmedCountry);
  return (
    <>
      <div>
        <table className='w-full'>
          <thead>
            <tr className='border-black border-b-2'>
              <th className='text-left'>Country Name</th>
              <th className='text-right'>Country Code</th>
              <th className='text-right'>Confirmed Patient</th>
            </tr>
          </thead>
          <tbody>
            {topConfirmedCountry.map((item) => (
              <tr key={uuidv4()} className='border-black border-b-2'>
                <td className='py-1 text-left'>{item.countryRegion}</td>
                <td className='py-1 text-right'>{item.iso3}</td>
                <td className='py-1 text-right'>{item.confirmed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='absolute w-full bottom-0 left-0 flex flex-row justify-between items-center border-black border-t-2 px-4 py-1'>
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

export default DataDisplayTopConfirmed;
