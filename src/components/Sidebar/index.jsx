import React, { useContext } from "react";
import * as FontAwesomeIcons from "react-icons/fa";
import * as BootstrapIcons from "react-icons/bs";
import * as Ionicons4 from "react-icons/io";
import { NavigationContext } from "../../contexts/NavigationContext";
import ChicodeLogo from "../../source/chicodeLogo.PNG";

const Sidebar = () => {
  const { sidebarToggle, sidebarActive } = useContext(NavigationContext);

  return (
    <div
      id='sidebar-container'
      className={`fixed top-0 left-0 bg-white h-screen shadow-lg z-20 overflow-hidden ${
        sidebarActive ? "p-5 w-56" : "p-0 w-0"
      }`}>
      <div className='flex flex-row items-center justify-between mb-3'>
        <span>
          <img src={ChicodeLogo} alt='Chicode Logo' className='h-8 w-10' />
        </span>
        <span onClick={sidebarToggle} className='text-xl cursor-pointer'>
          <Ionicons4.IoMdClose />
        </span>
      </div>
      <div className='mb-3'>
        <span className='uppercase text-lg'>Manage</span>
      </div>
      <div>
        <ul>
          <li className='sidebar-item'>
            <div className='mr-2'>
              <FontAwesomeIcons.FaUser />
            </div>
            <div>Users</div>
          </li>
          <li className='sidebar-item'>
            <div className='mr-2'>
              <FontAwesomeIcons.FaSun />
            </div>
            <div>Skill</div>
          </li>
          <li className='sidebar-item'>
            <div className='mr-2'>
              <Ionicons4.IoIosStats />
            </div>
            <div>Reports</div>
          </li>
          <li className='sidebar-item'>
            <div className='mr-2'>
              <BootstrapIcons.BsGraphUp />
            </div>
            <div>Analytics</div>
          </li>
          <li className='sidebar-item'>
            <div className='mr-2'>
              <BootstrapIcons.BsInfoCircleFill />
            </div>
            <div>Announcements</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
