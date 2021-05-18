import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='flex flex-row'>
        <div className='relative w-56'>
          <Sidebar />
        </div>
        <div></div>
      </div>
    </Router>
  );
};

export default App;
