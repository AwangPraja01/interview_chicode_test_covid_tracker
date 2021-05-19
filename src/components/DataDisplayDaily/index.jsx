import React from "react";
import Graph from "./Graph";

const DataDisplayDaily = () => {
  return (
    <>
      <div>
        <span>Active patient</span>
        <span>479</span>
      </div>
      <div>
        <div>
          <span>Active patient today</span>
        </div>
        <div>
          <Graph />
        </div>
      </div>
      <div>
        <div>
          <span>Top Active Country</span>
          <span>Active Patient</span>
        </div>
        <div id='table-top-active'>
          <div>
            <span>USA</span>
            <span>57</span>
          </div>
          <div>
            <span>USA</span>
            <span>57</span>
          </div>
          <div>
            <span>USA</span>
            <span>57</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataDisplayDaily;
