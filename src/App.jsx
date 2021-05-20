import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import DataDisplayWithGraph from "./components/DataDisplayWithGraph";
import DataDisplayTopDeath from "./components/DataDisplayTopDeath";
import DataDisplayTopRecovered from "./components/DataDisplayTopRecovered";
import DataDisplayTopConfirmed from "./components/DataDisplayTopConfirmed";
import BarGraph from "./components/BarGraph";
import CountryNamesContextProvider from "./contexts/CountryNamesContext";
import CountryCasesContextProvider from "./contexts/CountryCasesContext";
import CountryTopDeathCasesContextProvider from "./contexts/CountryTopDeathCasesContext";

const App = () => {
  return (
    <Router>
      <div id='navbar-container' className='relative h-14'>
        <Navbar />
      </div>

      <div className='flex flex-row'>
        <div id='sidebar-container' className='relative w-56'>
          <Sidebar />
        </div>

        <div
          id='main-content-container'
          className='relative flex-1 flex flex-col px-4 py-5'>
          <div className='flex-1 mb-2'>
            <span>Chicode Home</span>
          </div>

          <div className='flex flex-row justify-between items-start mb-5'>
            <div
              id='data-display-with-graph-container'
              className='bg-white w-3/5 h-124 mr-7 rounded-md overflow-hidden'>
              <CountryNamesContextProvider>
                <CountryCasesContextProvider>
                  <DataDisplayWithGraph />
                </CountryCasesContextProvider>
              </CountryNamesContextProvider>
            </div>

            <div
              id='data-display-top-death-container'
              className='bg-blue-600 h-124 flex-1 rounded-md text-white p-3'>
              <CountryTopDeathCasesContextProvider>
                <DataDisplayTopDeath />
              </CountryTopDeathCasesContextProvider>
            </div>
          </div>

          <div className=' flex flex-row justify-between items-start mb-5'>
            <div
              id='data-display-top-recovered-container'
              className='relative w-1/2 h-full mr-5'>
              <div className='mb-2'>
                <span>
                  Dolorum pariatur repellat officia autem dolore iusto enim?
                </span>
              </div>
              <div className='relative bg-white h-full p-4 rounded-md'>
                <DataDisplayTopRecovered />
              </div>
            </div>
            <div
              id='data-display-top-confirmed-container'
              className='w-1/2 h-full'>
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

          <div
            id='bar-graph-container'
            className='relative mt-5 flex flex-col justify-between items-start'>
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
