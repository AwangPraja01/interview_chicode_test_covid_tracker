import React, { useContext } from "react";
import * as FontAwesomeIcons from "react-icons/fa";
import * as Ionicons4 from "react-icons/io";
import { NavLink as Link } from "react-router-dom";
import { NavigationContext } from "../../contexts/NavigationContext";
import ChicodeLogo from "../../source/chicodeLogo.PNG";

const Navbar = () => {
  const { sidebarToggle } = useContext(NavigationContext);
  return (
    <nav id='navbar-container' className='relative h-14'>
      <div className='fixed  flex flex-row justify-between items-center bg-white px-5 h-14 shadow-sm w-full z-10'>
        <div
          id='left'
          className='flex flex-row items-center justify-items-start'>
          <span
            onClick={sidebarToggle}
            className='text-2xl mr-2 cursor-pointer'>
            <Ionicons4.IoMdMenu />
          </span>
          <span>
            <Link to='/'>
              <img src={ChicodeLogo} alt='Chicode Logo' className='h-8 w-10' />
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
      </div>
    </nav>
  );
};

export default Navbar;
