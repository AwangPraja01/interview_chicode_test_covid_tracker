import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import DataDisplayWithGraph from "./components/DataDisplayWithGraph";
import DataDisplayDaily from "./components/DataDisplayDaily";
import DataDisplayTopRecovered from "./components/DataDisplayTopRecovered";
import DataDisplayTopConfirmed from "./components/DataDisplayTopConfirmed";
import BarGraph from "./components/BarGraph";

const App = () => {
  return (
    <Router>
      <div className='relative h-14'>
        <Navbar />
      </div>
      <div className='flex flex-row'>
        <div className='relative w-56'>
          <Sidebar />
        </div>

        <div className='relative flex-1 flex flex-col px-4 py-5'>
          <div className='flex-1 mb-2'>
            <span>Chicode Home</span>
          </div>

          <div className='flex flex-row justify-between items-start mb-5'>
            <div className='bg-white w-3/5 mr-7'>
              <DataDisplayWithGraph />
            </div>
            <div className='bg-blue-400 flex-1 h-full'>
              <DataDisplayDaily />
            </div>
          </div>

          <div className='flex flex-row justify-between items-start mb-5'>
            <div className='w-1/2 mr-5'>
              <div className='mb-2'>
                <span>
                  Dolorum pariatur repellat officia autem dolore iusto enim?
                </span>
              </div>
              <div className='bg-white '>
                <DataDisplayTopRecovered />
              </div>
            </div>
            <div className='w-1/2'>
              <div className='mb-2'>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit?
                </span>
              </div>
              <div className='bg-white '>
                <DataDisplayTopConfirmed />
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-between items-start'>
            <div className='flex-1 mb-2'>
              <span>Lorem ipsum dolor sit amet?</span>
            </div>
            <div className='bg-white flex-1 w-full'>
              <BarGraph />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
