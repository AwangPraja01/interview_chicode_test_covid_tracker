import React from "react";
import Graph from "./Graph";

const DataDisplayDaily = () => {
  return (
    <div className='text-white p-3'>
      <div className='flex flex-col justify-center items-start mb-5'>
        <span>Active patient today</span>
        <span className='text-4xl'>479</span>
      </div>
      <div className='mb-5'>
        <Graph />
      </div>
      <div>
        <div className='flex flex-row justify-between items-center border-black border-b-2 pb-1'>
          <span>Top Active Country</span>
          <span>Active Patient</span>
        </div>
        <div id='table-top-active'>
          <div className='flex flex-row justify-between items-center border-black border-b-2 py-1'>
            <span>USA</span>
            <span>57</span>
          </div>
          <div className='flex flex-row justify-between items-center border-black border-b-2 py-1'>
            <span>USA</span>
            <span>57</span>
          </div>
          <div className='flex flex-row justify-between items-center py-1'>
            <span>USA</span>
            <span>57</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDisplayDaily;
