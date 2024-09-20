import React from 'react';
import { Button, Dropdown, Menu, Tag } from 'antd';
import { FaChevronDown, FaUserCheck } from 'react-icons/fa';
import BusImage from '../assets/BusD.svg';
import { EyeOutlined, FormOutlined, StopOutlined } from '@ant-design/icons';

const VehicleDetails: React.FC = () => {

  const menu = (
    <Menu>
      <Menu.Item key="1"><FormOutlined className="mr-1" /> Edit</Menu.Item>
      <Menu.Item key="2"><  EyeOutlined className="mr-2" /> Report</Menu.Item>
      <Menu.Item key="3">   <StopOutlined className='mr-2' /> Disable</Menu.Item>
    </Menu>
  );

  return (
    <div className="w-full max-w-3xl mx-auto bg-[white]  rounded-lg ">
      
      <div className="flex justify-between items-center border-b bg-[#FF742C14] border-gray-200 pb-4 mb-4">
        <h2 className="text-l font-bold  px-4 mt-2">VEHICLE INFORMATION</h2>
        <div className='px-4 mt-3'><Dropdown overlay={menu} trigger={['click']}>
          <Button className="flex items-center  rounded-md text-sm border-[#FF742C] bg-[#FF742C14] ">
           <h2 className='font-semibold'> Action</h2> <FaChevronDown  />
          </Button>
        </Dropdown> 
        </div>
      </div>

      
      <div className="flex px-4">
        
        <div className="w-1/3">
          <img src={BusImage} alt="Vehicle" className="w-full h-auto rounded" />
        </div>

        
        <div className="w-2/3 grid grid-cols-2 gap-4 pl-6">
          <div className="bg-[#FF742C14] p-2 rounded-md">
            <p className="text-sm font-semibold  text-gray-400">Vehicle Type</p>
            <p>Coach Bus</p>
          </div>
          <div className="bg-[#FF742C14] p-2 rounded-md">
            <p className="text-sm font-semibold text-gray-400">Vehicle Make</p>
            <p>Tata Motors</p>
          </div>
          <div className="bg-[#FF742C14] p-2 rounded-md">
            <p className="text-sm font-semibold  text-gray-400">Registration No</p>
            <p>01907</p>
          </div>
          <div className="bg-[#FF742C14] p-2 rounded-md">
            <p className="text-sm font-semibold  text-gray-400">Engine Number</p>
            <p>4789</p>
          </div>
          <div className="bg-[#FF742C14] p-2 rounded-md">
            <p className="text-sm font-semibold  text-gray-400">Color</p>
            <p>White</p>
          </div>
          <div className="bg-[#FF742C14] p-2 rounded-md">
            <p className="text-sm font-semibold  text-gray-400">Number of Seat</p>
            <p>14</p>
          </div>
          <div className="bg-[#FF742C14] p-2 rounded-md">
            <p className="text-sm font-semibold  text-gray-400">Fleet No</p>
            <p>01907</p>
          </div>
          <div className="bg-[#FF742C14] p-2 rounded-md">
            <p className="text-sm font-semibold  text-gray-400">Chasis Number</p>
            <p>7890</p>
          </div>
          <div className="bg-[#FF742C14] p-2 rounded-md">
            <p className="text-sm font-semibold  text-gray-400">Status</p>
            <Tag color="blue" className="flex items-center border-none">
            <FaUserCheck className="mr-1" /> ASSIGNED
            </Tag>
          </div>
          <div className="bg-[#FF742C14] p-2 rounded-md">
            <p className="text-sm font-semibold  text-gray-400">Note</p>
            <p>None</p>
          </div>
        </div>
      </div>

      
      <div className="flex justify-end mt-2 space-x-4 p-2 mr-2">
        <Button className="w-[144px]" onClick={() => console.log('Cancel')}>
          Cancel
        </Button>
        <Button type="primary" className="w-[144px]" onClick={() => console.log('Proceed')}>
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default VehicleDetails;
