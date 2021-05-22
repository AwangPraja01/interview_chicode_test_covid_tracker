import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import DataDisplayPerCountry from "./components/DataDisplayPerCountry";
import DataDisplayTopDeath from "./components/DataDisplayTopDeath";
import DataDisplayTopRecovered from "./components/DataDisplayTopRecovered";
import DataDisplayTopConfirmed from "./components/DataDisplayTopConfirmed";
import DataDisplayTopCountry from "./components/DataDisplayTopCountry";

const App = () => {
  return (
    <Router>
      <Navbar />

      <div id='main-and-sidebar-container' className='flex flex-row'>
        <Sidebar />

        <main id='main-content-container'>
          <div className='flex-1 mb-2'>
            <span className='text-lg font-semibold text-gray-800'>
              Chicode Home
            </span>
          </div>

          <div className='flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start mb-5'>
            <DataDisplayPerCountry />
            <DataDisplayTopDeath />
          </div>

          <div className='flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start mb-5'>
            <DataDisplayTopRecovered />
            <DataDisplayTopConfirmed />
          </div>

          <div id='data-display-top-country'>
            <DataDisplayTopCountry />
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
