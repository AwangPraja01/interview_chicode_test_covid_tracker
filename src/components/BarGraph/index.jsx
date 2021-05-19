import React from "react";
import Graph from "./Graph";
import * as Ionicons4 from "react-icons/io";

const BarGraph = () => {
  return (
    <>
      <div className='w-full flex flex-row items-start mb-3'>
        <div className='cursor-pointer  p-2 border-t-4 border-green-500'>
          <span>Confirmed</span>
        </div>
        <div className='cursor-pointer  mx-2 p-2 border-t-4 border-green-500'>
          <span>Deaths</span>
        </div>
        <div className='cursor-pointer  p-2 border-t-4 border-green-500'>
          <span>Recovered</span>
        </div>
      </div>
      <div className='px-3 mb-3'>
        <Graph />
      </div>
      <div className='flex flex-row justify-start items-center border-t-2 border-black p-2'>
        <span>Last 7 days</span>
        <span>
          <Ionicons4.IoMdArrowDropdown />
        </span>
      </div>
    </>
  );
};

export default BarGraph;
