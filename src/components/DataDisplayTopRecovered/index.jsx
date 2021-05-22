import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Covid19Context } from "../../contexts/Covid19Context";
import * as MaterialDesignIcons from "react-icons/md";
import NumberFormat from "react-number-format";

const DataDisplayTopRecovered = () => {
  const { topRecoveredCountry } = useContext(Covid19Context);
  return (
    <div id='data-display-top-recovered-container'>
      <div className='mb-5'>
        <span className='text-lg font-semibold text-gray-800'>
          Countries with the highest number of recovered patients
        </span>
      </div>
      <div className=' bg-white  p-4'>
        <div>
          <table className='w-full'>
            <thead>
              <tr className='border-gray-400 border-b-2'>
                <th className='text-left font-semibold'>Country Name</th>
                <th className='text-right font-semibold'>Country Code</th>
                <th className='text-right font-semibold'>Recovered Patient</th>
              </tr>
            </thead>
            <tbody className='divide-y-2 divide-gray-400'>
              {topRecoveredCountry.map((item) => (
                <tr key={uuidv4()}>
                  <td className='py-1 text-left text-green-500 font-semibold'>
                    {item.countryRegion}
                  </td>
                  <td className='py-1 text-right'>{item.iso3}</td>
                  <td className='py-1 text-right'>
                    <NumberFormat
                      value={item.recovered}
                      thousandSeparator={true}
                      displayType={"text"}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='w-full flex flex-row justify-between items-center border-gray-400 border-t-2 pt-2'>
          <div>
            <select
              name='time_span'
              id='time_span'
              className='focus:outline-none cursor-pointer'>
              <option value='last7days'>Last 7 days</option>
              <option value='last7days'>Last 30 days</option>
            </select>
          </div>
          <div className='flex flex-row items-center justify-start text-green-500 font-semibold uppercase cursor-pointer'>
            <span>User Report</span>
            <span className='text-xl mt-1'>
              <MaterialDesignIcons.MdKeyboardArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDisplayTopRecovered;
