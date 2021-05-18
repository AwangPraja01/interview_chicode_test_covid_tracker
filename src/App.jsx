import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

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
        <div className='relative flex-1 px-4 py-5'>
          <span>Chicode Home</span>
        </div>
      </div>
    </Router>
  );
};

export default App;
