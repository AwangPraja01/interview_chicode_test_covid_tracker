import React from "react";
import Graph from "./Graph";
import * as Ionicons4 from "react-icons/io";

const DataDisplayWithGraph = () => {
  return (
    <>
      <div className='w-full flex flex-row justify-between items-start'>
        <div className='bg-yellow-500 flex-grow flex flex-col'>
          <span>Confirmed</span>
          <span className='text-2xl'>54,406</span>
        </div>
        <div className='bg-red-500 flex-grow flex flex-col'>
          <span>Deaths</span>
          <span className='text-2xl'>1,457</span>
        </div>
        <div className='bg-green-500 flex-grow flex flex-col'>
          <span>Recovered</span>
          <span className='text-2xl'>4,774</span>
        </div>
      </div>
      <div>
        <Graph />
      </div>
      <div className='flex flex-row justify-start items-center border-t-2 border-black'>
        <span>Last 7 days</span>
        <span>
          <Ionicons4.IoMdArrowDropdown />
        </span>
      </div>
    </>
  );
};

export default DataDisplayWithGraph;
