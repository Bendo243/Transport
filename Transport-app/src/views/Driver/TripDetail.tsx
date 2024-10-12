import React from 'react';
import { Button, Dropdown, Menu, Modal, Tag } from 'antd';
import arrow from '../../assets/arrow both.png'
import BusG from '../../assets/Bust.svg'
import { FaChevronDown } from 'react-icons/fa';
import { EyeOutlined, FormOutlined, StopOutlined } from '@ant-design/icons';

interface TransportModalProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  trip: {
    route: string;
    to: string;
    duration: string;
    date: string;
    price: string;
    status: 'CLOSED' | 'DELAYED';
  };
}
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


const TransportModal: React.FC<TransportModalProps> = ({ visible, onOk, onCancel, trip }) => {
  return (

    
    <Modal
      title={null}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
      width={400}
      centered
      className="rounded-lg custom-modal"
      closeIcon={false}
    >
      <div className="">
      <div className="bg-[#FFF5EF] flex justify-between items-center py-4 px-2 rounded-t-lg space-x-2 border-b border-[#F5C6CB] ">
           
        <div className='flex space-x-1'>  <h2 className="text-lg font-semibold">Jube</h2><span><img className='mt-1.5' src={arrow} alt="" /></span> <h2 className="text-lg font-semibold">Abuja</h2></div>
        <Dropdown overlay={menu} trigger={['click']}>
            <Button className="flex items-center rounded-md text-sm border-[#FF742C] bg-[#FF742C14]">
              <h2 className="font-semibold"> Action</h2> <FaChevronDown />
            </Button>
          </Dropdown>
       </div>
       <div className='flex justify-between'>
        <div> <img className='mt-12 ml-5' src={BusG} alt="" /></div>
        {/* Details Section */}
        <div className="grid grid-cols-2 gap-4 mt-4 px-2 py-2">
          <div className="bg-[#FF742C14] p-4 rounded-md">
            <p className="text-gray-500">Duration</p>
            <p className="font-bold">{trip.duration}</p>
          </div>

          <div className="bg-[#FF742C14] p-4 rounded-md">
            <p className="text-gray-500">Date</p>
            <p className="font-bold">{trip.date}</p>
          </div>

          <div className="bg-[#FF742C14] p-4 rounded-md">
            <p className="text-gray-500">Price</p>
            <p className="font-bold">{trip.price}</p>
          </div>

          <div className="bg-[#FF742C14] p-4 rounded-md">
            <p className="text-gray-500">Status</p>
            <Tag color={trip.status === 'CLOSED' ? 'default' : 'yellow'} className="font-bold text-sm">
              {trip.status.toUpperCase()}
            </Tag>
          </div>
        </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransportModal;
