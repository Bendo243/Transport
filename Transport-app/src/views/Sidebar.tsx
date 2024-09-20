import React, { useState } from 'react';
import {  FaRoute, FaBusAlt, FaUsers, FaSuitcase } from 'react-icons/fa';
import ITC from '../assets/Bus2.png';
import { Link } from "react-router-dom"

const Sidebar: React.FC = () => {
  
  const [activeOption, setActiveOption] = useState<string>('');

  
  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };

  
  const getOptionClass = (option: string) =>
    `flex items-center px-4 py-2 cursor-pointer mr-2 ${
      activeOption === option ? 'bg-[#FF742C]' : 'hover:bg-[#FF742C]'
    }`;

  return (
    <div className="h-full bg-black-100 ml-2">
      <div className="mb-8 flex items-center justify-center mt-4 ml-2">
        <img src={ITC} alt="Logo" className="h-10 mr-2 mt-2 ml-1" />
        <h1 className="text-base font-semibold mt-3 text-white">IMO TRANSPORT COMPANY LIMITED</h1>
      </div>

      <ul className="text-white">
      <Link to=''>
        <li>
          <p
            className={getOptionClass('Manifest')}
            onClick={() => handleOptionClick('Manifest')}
          >
            Manifest
          </p>
        </li>
        </Link>
       <Link to=''>
        <li
          className={getOptionClass('Trip')}
          onClick={() => handleOptionClick('Trip')}
        >
          <FaSuitcase className="mr-2" />
          <span>Trip</span>
        </li>
        </Link>
        
        <Link to='/vehicle'> <li
          className={getOptionClass('Vehicle')}
          onClick={() => handleOptionClick('Vehicle')}
        >
          <FaBusAlt className="mr-2" />
          <span>Vehicle</span>
        </li>
        </Link>
       <Link to='/loadingBay'> <li
          className={getOptionClass('Loading Bay')}
          onClick={() => handleOptionClick('Loading Bay')}
        >
          <FaRoute className="mr-2" />
          <span>Loading Bay</span>
        </li>
        </Link>
      
     
<Link to='/users'>
        <li
          className={getOptionClass('Users')}
          onClick={() => handleOptionClick('Users')}
        >
          <FaUsers className="mr-2" />
          <span>Users</span>
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
