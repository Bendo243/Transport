import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Card,Tag } from 'antd';
import BusImage from '../assets/Bus.svg';

const VehicleDetails: React.FC = () => {
  return (
    <div className="flex flex-col  bg-white-50   ">
    
      <div className="flex items-center justify-between px-5 bg-white  ">
        <div className="flex items-center space-x-4">
          
          <img src={BusImage} alt="Bus" className="w-[56px] h-[56px] bg-[#BA41321A] rounded-full" />
          
          <div>
            <h1 className="text-xl font-semibold">Bus Gold</h1>
            <p className="text-orange-500">00071</p>
          </div>
        </div>

        
        
      </div>

      
      <Card className="border-white">
        <div className="bg-orange-500 text-white py-2 px-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">VEHICLE INFORMATION</h2>
        </div>

        <div className="grid grid-cols-2 gap-2 py-2 bg-white-100 rounded-b-lg">
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-400 font-medium">Vehicle Type</p>
            <p className="text-gray-800">Coach Bus</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-400 font-medium">Vehicle Make</p>
            <p className="text-gray-800">Tata Motors</p>
          </div>

          
          <div className="bg-gray-100 py-4 px-4 rounded-lg">
            <p className="text-gray-400 font-medium">Registration No</p>
            <p className="text-gray-800">01907</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-400 font-medium">Engine No</p>
            <p className="text-gray-800">4789</p>
          </div>

          
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-400 font-medium">Color</p>
            <p className="text-gray-800">White</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-400 font-medium">Seat No</p>
            <p className="text-gray-800">2A</p>
          </div>

        
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-400 font-medium">Fleet No</p>
            <p className="text-gray-800">01907</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-400 font-medium">Chasis No</p>
            <p className="text-gray-800">7890</p>
          </div>

          
          <div className="bg-gray-100 p-4 rounded-lg ">
            <p className="text-gray-400 font-medium">Status</p>
            <div className="flex items-center space-x-2">
            <Tag className='flex space-x-1 bg-[#E3FFE6] border-none '> <FaCheckCircle className="text-green-500 mt-1" />
              <span className="text-green-500 font-semibold">AVAILABLE</span>
              </Tag>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VehicleDetails;
