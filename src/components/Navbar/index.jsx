import React from "react";
import * as FontAwesomeIcons from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between items-center bg-white px-5 h-14 shadow-md'>
      <div id='left'>
        <span>
          <Link to='/'>
            <FontAwesomeIcons.FaSquare />
          </Link>
        </span>
      </div>
      <div id='right'>
        <ul className='flex flex-row items-center justify-end text-gray-500'>
          <li className='text-xl'>
            <Link to='/'>
              <FontAwesomeIcons.FaBell />
            </Link>
          </li>
          <li className='text-4xl mx-4'>
            <Link to='/'>
              <FontAwesomeIcons.FaCircle />
            </Link>
          </li>
          <li className='text-xl'>
            <Link to='/'>
              <FontAwesomeIcons.FaAngleDown />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
