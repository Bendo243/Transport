import React from 'react';
import { Avatar } from 'antd';
import { FaChevronDown } from 'react-icons/fa';
import {BellOutlined} from '@ant-design/icons';


const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white ">
      <h2 className="text-xl font-semibold"></h2>
      <div className="flex items-center">
        <BellOutlined  className='mr-10 hover:cursor-pointer'/>
       <div className='hover:cursor-pointer flex'>
        <Avatar src="https://randomuser.me/api/portraits/women/1.jpg" />
       
     <div className='flex'><span className="mr-4 ml-2 mt-1 ">Modesta Ekeh </span>
     <FaChevronDown className='mt-2 mr-4 text-gray-400'/>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
