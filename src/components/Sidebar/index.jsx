import React from "react";
import * as FontAwesomeIcons from "react-icons/fa";
import * as BootstrapIcons from "react-icons/bs";
import * as Ionicons4 from "react-icons/io";

const Sidebar = () => {
  return (
    <div className='fixed bg-white w-56 h-screen p-5 shadow-lg z-20'>
      <div className='mb-3'>
        <span className='uppercase text-lg'>Manage</span>
      </div>
      <div>
        <ul>
          <li className='flex flex-row items-center justify-start mb-1'>
            <div className='mr-2'>
              <FontAwesomeIcons.FaUser />
            </div>
            <div>Users</div>
          </li>
          <li className='flex flex-row items-center justify-start mb-1'>
            <div className='mr-2'>
              <FontAwesomeIcons.FaSun />
            </div>
            <div>Skill</div>
          </li>
          <li className='flex flex-row items-center justify-start mb-1'>
            <div className='mr-2'>
              <Ionicons4.IoIosStats />
            </div>
            <div>Reports</div>
          </li>
          <li className='flex flex-row items-center justify-start mb-1'>
            <div className='mr-2'>
              <BootstrapIcons.BsGraphUp />
            </div>
            <div>Analytics</div>
          </li>
          <li className='flex flex-row items-center justify-start'>
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
