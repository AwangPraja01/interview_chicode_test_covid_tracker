import React from "react";
import Graph from "./Graph";
import * as Ionicons4 from "react-icons/io";

const DataDisplayWithGraph = () => {
  return (
    <>
      <div className='w-full flex flex-row justify-between items-start mb-3 '>
        <div className='cursor-pointer flex-grow flex flex-col p-2 border-t-4 border-green-500'>
          <span>Confirmed</span>
          <span className='text-2xl'>54,406</span>
        </div>
        <div className='cursor-pointer flex-grow flex flex-col mx-2 p-2 border-t-4 border-green-500 '>
          <span>Deaths</span>
          <span className='text-2xl'>1,457</span>
        </div>
        <div className='cursor-pointer flex-grow flex flex-col p-2 border-t-4 border-green-500 '>
          <span>Recovered</span>
          <span className='text-2xl'>4,774</span>
        </div>
      </div>
      <div className='px-2 mb-3'>
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

export default DataDisplayWithGraph;
