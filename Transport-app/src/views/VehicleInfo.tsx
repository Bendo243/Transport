import React from 'react';
import { Button, Dropdown, Menu, Tag } from 'antd';
import { FaChevronDown, FaUserCheck, } from 'react-icons/fa';
import BusImage from '../assets/BusD.svg';
import { EyeOutlined, FormOutlined, StopOutlined } from '@ant-design/icons';
import bad from '../assets/Bad.svg' 
import good from '../assets/good5.svg'

interface VehicleDetailsProps {
  selectedData: any;
  onClose: () => void;
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ selectedData, onClose }) => {
  const data = selectedData;

  
  const renderStatus = (status: string) => {
    let color = '';
    let icon = null;

    if (status === 'AVAILABLE') {
      color = 'green';
      icon = <img src={good} alt="Logo" className='mr-2' />;
    } else if (status === 'ASSIGNED') {
      color = 'blue';
      icon = <FaUserCheck className="mr-1" />;
    } else if (status === 'FAULTY') {
      color = 'red';
      icon =<img src={bad} alt="Logo" className='mr-2' />;

    }

    return (
      <Tag color={color} className="flex items-center border-none rounded-lg ">
        {icon} {status.toUpperCase()}
      </Tag>
    );
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <FormOutlined className="mr-1" /> Edit
      </Menu.Item>
      <Menu.Item key="2">
        <EyeOutlined className="mr-2" /> Report
      </Menu.Item>
      <Menu.Item key="3">
        <StopOutlined className="mr-2" /> Disable
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg">
      <div className="flex justify-between items-center border-b bg-[#FF742C14] border-gray-200 pb-4 mb-4">
        <h2 className="text-l font-bold px-4 mt-2">VEHICLE INFORMATION</h2>
        <div className="px-4 mt-3">
          <Dropdown overlay={menu} trigger={['click']}>
            <Button className="flex items-center rounded-md text-sm border-[#FF742C] bg-[#FF742C14]">
              <h2 className="font-semibold"> Action</h2> <FaChevronDown />
            </Button>
          </Dropdown>
        </div>
      </div>

      <div className="flex px-4">
        <div className="w-1/3">
          <img src={BusImage} alt="Vehicle" className="w-full h-auto rounded" />
        </div>

        <div className="w-2/3 grid grid-cols-2 gap-4 pl-6">
          <div className=" p-2 rounded-md">
            <p className="text-sm font-semibold text-gray-400">Vehicle Type</p>
            <p>{data.type}</p>
          </div>
          <div className=" p-2 rounded-md">
            <p className="text-sm font-semibold text-gray-400">Vehicle Make</p>
            <p>{data.name}</p>
          </div>
          <div className=" p-2 rounded-md">
            <p className="text-sm font-semibold text-gray-400">Registration No</p>
            <p>{data.code}</p>
          </div>
          <div className="p-2 rounded-md">
            <p className="text-sm font-semibold text-gray-400">Engine Number</p>
            <p>4789</p>
          </div>
          <div className=" p-2 rounded-md">
            <p className="text-sm font-semibold text-gray-400">Color</p>
            <p>{data.color}</p>
          </div>
          <div className=" p-2 rounded-md">
            <p className="text-sm font-semibold text-gray-400">Number of Seat</p>
            <p>{data.seat}</p>
          </div>
          <div className="p-2 rounded-md">
            <p className="text-sm font-semibold text-gray-400">Fleet No</p>
            <p>01907</p>
          </div>
          <div className=" p-2 rounded-md">
            <p className="text-sm font-semibold text-gray-400">Chasis Number</p>
            <p>7890</p>
          </div>
          <div className=" p-2 rounded-md mb-3">
            <p className="text-sm font-semibold text-gray-400">Status</p>
            {renderStatus(data.status)}
          </div>
          <div className=" p-2 rounded-md">
            <p className="text-sm font-semibold text-gray-400">Note</p>
            <p>None</p>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-end mt-2 space-x-4 p-2 mr-2">
        <Button className="w-[144px]" onClick={onClose}>
          Cancel
        </Button>
        <Button type="primary" className="w-[144px]" onClick={onClose}>
          Proceed
        </Button>
      </div> */}
    </div>
  );
};

export default VehicleDetails;
