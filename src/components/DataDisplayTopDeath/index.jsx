import React, { useContext } from "react";
import GraphDataDisplayTopDeath from "./GraphDataDisplayTopDeath";
import { v4 as uuidv4 } from "uuid";
import { Covid19Context } from "../../contexts/Covid19Context";
import NumberFormat from "react-number-format";

const DataDisplayTopDeath = () => {
  const { totalDeaths, topDeathCountry } = useContext(Covid19Context);

  return (
    <div id='data-display-top-death-container'>
      <div className='flex flex-col justify-center items-start mb-2'>
        <span>Total Global Patient Deaths</span>
        <span className='text-4xl'>
          <NumberFormat
            value={totalDeaths}
            thousandSeparator={true}
            displayType={"text"}
          />
        </span>
      </div>

      <div className='mb-5'>
        <GraphDataDisplayTopDeath topDeathCountry={topDeathCountry} />
      </div>

      <div id='table-top-death' className='overflow-y-scroll'>
        <div className='flex flex-row justify-between items-center border-white border-b-2 pb-1'>
          <span className='font-semibold capitalize'>
            Top death cases country
          </span>
          <span className='font-semibold capitalize'>Death patient</span>
        </div>

        <div className='divide-y-2'>
          {topDeathCountry.map((item) => (
            <div key={uuidv4()} className='top-deaths-cases-item'>
              <span>{item.countryRegion}</span>
              <span>
                <NumberFormat
                  value={item.deaths}
                  thousandSeparator={true}
                  displayType={"text"}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataDisplayTopDeath;
