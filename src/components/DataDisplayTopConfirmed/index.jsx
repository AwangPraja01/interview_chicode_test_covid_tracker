import React from "react";
import * as Ionicons4 from "react-icons/io";

const DataDisplayTopConfirmed = () => {
  return (
    <>
      <div>
        <table className='w-full'>
          <tr className='border-black border-b-2'>
            <th>Courses</th>
            <th>Completed</th>
            <th>Completion %</th>
          </tr>
          <tr className='border-black border-b-2'>
            <td>Alfreds Futterkiste</td>
            <td>15,247</td>
            <td>15 %</td>
          </tr>
          <tr className='border-black border-b-2'>
            <td>Alfreds Futterkiste</td>
            <td>15,247</td>
            <td>15 %</td>
          </tr>
          <tr className='border-black border-b-2'>
            <td>Alfreds Futterkiste</td>
            <td>15,247</td>
            <td>15 %</td>
          </tr>
          <tr className='border-black border-b-2'>
            <td>Alfreds Futterkiste</td>
            <td>15,247</td>
            <td>15 %</td>
          </tr>
          <tr className='border-black border-b-2'>
            <td>Alfreds Futterkiste</td>
            <td>15,247</td>
            <td>15 %</td>
          </tr>
          <tr className='border-black border-b-2'>
            <td>Alfreds Futterkiste</td>
            <td>15,247</td>
            <td>15 %</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>15,247</td>
            <td>15 %</td>
          </tr>
        </table>
      </div>
      <div className='flex flex-row justify-between items-center border-black border-t-2'>
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
