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
            <div className='bg-white w-3/5 mr-7 rounded-md overflow-hidden'>
              <DataDisplayWithGraph />
            </div>
            <div className='bg-blue-600 flex-1 h-full rounded-md'>
              <DataDisplayDaily />
            </div>
          </div>

          <div className=' flex flex-row justify-between items-start mb-5'>
            <div className='relative w-1/2 h-full mr-5'>
              <div className='mb-2'>
                <span>
                  Dolorum pariatur repellat officia autem dolore iusto enim?
                </span>
              </div>
              <div className='relative bg-white p-4 h-full rounded-md'>
                <DataDisplayTopRecovered />
              </div>
            </div>
            <div className='w-1/2 h-full'>
              <div className='mb-2'>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit?
                </span>
              </div>
              <div className='relative bg-white h-full p-4 rounded-md'>
                <DataDisplayTopConfirmed />
              </div>
            </div>
          </div>

          <div className='relative mt-5 flex flex-col justify-between items-start'>
            <div className='flex-1 mb-2'>
              <span>Lorem ipsum dolor sit amet?</span>
            </div>
            <div className='bg-white flex-1 w-full rounded-md overflow-hidden'>
              <BarGraph />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
