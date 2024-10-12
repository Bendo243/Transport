import React from 'react';
import { Modal, Button, Menu, Dropdown, Tag,} from 'antd';
import { FormOutlined, StopOutlined } from '@ant-design/icons';
import { FaChevronDown } from 'react-icons/fa';
import { Fa1, Fa2 } from 'react-icons/fa6';
import bad from '../../assets/bad1.svg'
import good from '../../assets/good5.svg'

interface PersonInfo {
  role: string;
  phone: string;
  name: string;
  email:string;
  status: string;
 
}

interface UserInfoModalProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  personData: PersonInfo;
}

const menu = (
    <Menu>
      <Menu.Item key="1">
        <FormOutlined className="mr-1" /> Edit
      </Menu.Item>
      <Menu.Item key="2">
        <StopOutlined className="mr-2" /> Disable
      </Menu.Item>
      {/* <Menu.Item key="3">
        <StopOutlined className="mr-2" /> Disable
      </Menu.Item> */}
    </Menu>
  );

const UserInfoModal: React.FC<UserInfoModalProps> = ({ visible, onOk, onCancel, personData }) => {
  
    const renderStatus = (status: string) => {
        let color = '';
        let icon = null;
        let textStyle = {};
      
        if (status === 'ACTIVE') {
          color = 'blue';
          icon = <img src={good} alt="Active" className="mr-2" />;
          textStyle = { fontWeight: 500 }; // Style for ACTIVE status
        } else if (status === 'INACTIVE') {
          color = '#F0F1F3';
          icon = <img src={bad} alt="Inactive" className="mr-2" />;
          textStyle = { color: '#777777', fontWeight: 600 }; // Style for INACTIVE status
        }
      
        return (
          <Tag color={color} className="flex items-center border-none rounded-lg">
            {icon} <span style={textStyle}>{status.toUpperCase()}</span>
          </Tag>
        );
      };
      
    return (
    <Modal
    //   title={personData.name.toUpperCase()}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      closeIcon={false}
      footer={[
        // <Button key="cancel" onClick={onCancel}>
        //   Close
        // </Button>,
      ]}
      className="custom-modal"
    >
      <div className="bg-[#FFF5EF] flex items-center justify-between py-4 px-2 rounded-t-lg space-x-2 border-b border-[#F5C6CB]">
        <div className="flex justify-between items-center">
          <h2 className=" font-bold">{personData.name.toUpperCase()}</h2>
        </div>
        <Dropdown overlay={menu} trigger={['click']}>
            <Button className="flex items-center rounded-md text-sm border-[#FF742C] bg-[#FF742C14]">
              <h2 className="font-semibold"> Action</h2> <FaChevronDown />
            </Button>
          </Dropdown>
      </div>

      {/* Personal Information Section */}
      <div className="px-4 py-3">
        <div className='font-semibold border-b-2 py-1'>Personal Information</div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="font-medium text-gray-400 mt-3">Role</p>
            <p className="">{personData.role}</p>
          </div>
          <div>
            <p className="font-medium mt-3 text-gray-400">Phone Number</p>
            <p className="">{personData.phone}</p>
          </div>
          <div>
            <p className="font-medium text-gray-400">Name</p>
            <p className="">{personData.name}</p>
          </div>
          <div>
            <p className="font-medium text-gray-400">Gender</p>
            <p className="">Female</p>
          </div>
          <div>
            <p className="font-medium text-gray-400">Email</p>
            <p className="">{personData.email}</p>
          </div>
          <div>
            <p className="font-medium text-gray-400">Status</p>
            <p className="w-[90px]">{renderStatus(personData.status)}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Address</p>
            <p className="">34 ibeju-lekki, Lagos State</p>
          </div>
        </div>

        <h3 className="font-semibold  mb-3 border-b-2 py-1">Next of Kin</h3>
        <div className=" gap-4">
          <div className='mb-3'>
            <p className="font-medium text-gray-400">Name</p>
            <p className="">Obicheozo Uzoma</p>
          </div>
          <div className="mb-3">
            <p className="font-medium text-gray-400">Address</p>
            <p className="">34 Ibeju-lekki,Lagos State</p>
          </div>
          <div>
            <p className="font-medium text-gray-400">Phone Number</p>
            <p className="">09134421366</p>
          </div>
          
        </div>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
