import React from "react";
import * as Ionicons4 from "react-icons/io";

const DataDisplayTopRecovered = () => {
  return (
    <>
      <div>
        <table className='w-full'>
          <thead>
            <tr className='border-black border-b-2'>
              <th className='text-left'>Courses</th>
              <th className='text-right'>Completed</th>
              <th className='text-right'>Completion %</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-black border-b-2'>
              <td className='py-1 text-left'>Alfreds Futterkiste</td>
              <td className='py-1 text-right'>15,247</td>
              <td className='py-1 text-right'>15 %</td>
            </tr>
            <tr className='border-black border-b-2'>
              <td className='py-1 text-left'>Alfreds Futterkiste</td>
              <td className='py-1 text-right'>15,247</td>
              <td className='py-1 text-right'>15 %</td>
            </tr>
            <tr className='border-black border-b-2'>
              <td className='py-1 text-left'>Alfreds Futterkiste</td>
              <td className='py-1 text-right'>15,247</td>
              <td className='py-1 text-right'>15 %</td>
            </tr>
            <tr className='border-black border-b-2'>
              <td className='py-1 text-left'>Alfreds Futterkiste</td>
              <td className='py-1 text-right'>15,247</td>
              <td className='py-1 text-right'>15 %</td>
            </tr>
            <tr className='border-black border-b-2'>
              <td className='py-1 text-left'>Alfreds Futterkiste</td>
              <td className='py-1 text-right'>15,247</td>
              <td className='py-1 text-right'>15 %</td>
            </tr>
            <tr className='border-black border-b-2'>
              <td className='py-1 text-left'>Alfreds Futterkiste</td>
              <td className='py-1 text-right'>15,247</td>
              <td className='py-1 text-right'>15 %</td>
            </tr>
            <tr className='border-black border-b-2'>
              <td className='py-1 text-left'>Alfreds Futterkiste</td>
              <td className='py-1 text-right'>15,247</td>
              <td className='py-1 text-right'>15 %</td>
            </tr>
            <tr className='border-black'>
              <td className='py-1 text-left'>Alfreds Futterkiste</td>
              <td className='py-1 text-right'>15,247</td>
              <td className='py-1 text-right'>15 %</td>
            </tr>
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
