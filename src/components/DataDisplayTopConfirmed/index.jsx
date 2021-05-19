import React from "react";
import * as Ionicons4 from "react-icons/io";

const DataDisplayTopConfirmed = () => {
  return (
    <>
      <div>
        <table className='w-full'>
          <tr className='border-black border-b-2'>
            <th className='text-left'>Courses</th>
            <th className='text-right'>Completed</th>
            <th className='text-right'>Completion %</th>
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
