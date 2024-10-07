import React, { useState, useEffect } from 'react';
import { FaBars, } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import ITC from '../assets/Bus2.png';
import { Link } from 'react-router-dom';
import vehicle from '../assets/Vehicle.svg'
import trip from '../assets/road.svg'
import users from '../assets/Users.svg'
import route from '../assets/route.svg'

const Sidebar: React.FC = () => {
  const [activeOption, setActiveOption] = useState<string>(''); 
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); 
  const [isMobileView, setIsMobileView] = useState<boolean>(window.innerWidth < 1024); 

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const handleOptionClick = (option: string) => {
    setActiveOption(option);
    if (isMobileView) {
      setIsSidebarOpen(false); 
    }
  };

  
  const getOptionClass = (option: string) =>
    `flex items-center px-4 py-2  cursor-pointer mr-2 ${
      activeOption === option ? 'bg-[#FF742C]' : 'hover:bg-[#FF742C] '
    }`;

  return (
    <div>
      
      <div className="lg:hidden flex justify-between items-center bg-black p-4">
        
        {!isSidebarOpen && <img src={ITC} alt="Logo" className="h-10" />}
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? (
            <IoCloseSharp className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" /> 
          )}
        </button>
      </div>

      
      <div
        className={`h-full lg:block lg:w-64 bg-black-100 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'block' : 'hidden'
        } lg:flex flex-col`}
      >
        
        {!isMobileView || !isSidebarOpen ? (
          <div className="mb-8 flex items-center justify-center mt-4 ml-2">
            <img src={ITC} alt="Logo" className="h-10 mr-2 mt-2 ml-1" />
            <h1 className="text-base font-semibold mt-3 text-white">
              IMO TRANSPORT COMPANY LIMITED
            </h1>
          </div>
        ) : null}

        
        <ul className="text-white">
          <Link to="">
            <li
              className={getOptionClass('Trip')}
              onClick={() => handleOptionClick('Trip')}
            >
              <img src={trip} alt="Logo" className="mr-2" />
              <span>Trip</span>
            </li>
          </Link>

          <Link to="/vehicle">
            <li
              className={getOptionClass('Vehicle')}
              onClick={() => handleOptionClick('Vehicle')}
            >
              <img src={vehicle} alt="Logo" className='mr-2' />
              <span>Vehicle</span>
            </li>
          </Link>

          <Link to="/loadingBay">
            <li
              className={getOptionClass('Loading Bay')}
              onClick={() => handleOptionClick('Loading Bay')}
            >
              <img src={route} alt="Logo" className="mr-2" />
              <span>Loading Bays</span>
            </li>
          </Link>

          <Link to="/users">
            <li
              className={getOptionClass('Users')}
              onClick={() => handleOptionClick('Users')}
            >
              <img src={users} alt="Logo" className="mr-2" />
              <span>Users</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
