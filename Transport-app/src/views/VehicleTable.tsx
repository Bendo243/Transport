import React, { useState } from 'react';
import { Table, Tag, Modal, Dropdown, Menu } from 'antd';
import { FaCheckCircle, FaChevronDown, FaTimesCircle, FaUserCheck } from 'react-icons/fa';
import { FormOutlined, FileExcelOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Bus1 from '../assets/Bus1.svg'; 
import VehicleDetails from './VehicleInfo';

interface Vehicle {
  key: string;
  sn: number;
  name: string;
  code: string;
  type: string;
  color: string;
  seat: string;
  status: 'AVAILABLE' | 'ASSIGNED' | 'FAULTY';
}

const VehicleTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  
  const data: Vehicle[] = [
    { key: '1', sn: 1, name: 'Bus Gold', code: '001', type: 'Coach Bus', color: 'White', seat: '20', status: 'AVAILABLE' },
    { key: '2', sn: 2, name: 'Bus Silver', code: '002', type: 'Coach Bus', color: 'Silver', seat: '20', status: 'ASSIGNED' },
    { key: '3', sn: 3, name: 'Bus Platinum', code: '003', type: 'Coach Bus', color: 'Black', seat: '24', status: 'FAULTY' },
  ];

  
  const columns = [
    { title: 'S/N', dataIndex: 'sn', key: 'sn' },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Vehicle) => (
        <div className="flex items-center space-x-2">
          <img src={Bus1} alt="Bus Icon" className="h-12 w-12 bg-[#BA41321A]  rounded-full" />
          <div className="flex flex-col">
            <p className="font-medium">{text}</p>
            <span className="text-sm text-[#FF742C] font-medium">{record.code}</span>
          </div>
        </div>
      ),
    },
    { title: 'TYPE', dataIndex: 'type', key: 'type' },
    { title: 'COLOR', dataIndex: 'color', key: 'color' },
    { title: 'SEAT No', dataIndex: 'seat', key: 'seat' },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'status',
      render: (status: Vehicle['status']) => {
        let color = '';
        let icon = null;

        if (status === 'AVAILABLE') {
          color = 'green';
          icon = <FaCheckCircle className="mr-1" />;
        } else if (status === 'FAULTY') {
          color = 'red';
          icon = <FaTimesCircle className="mr-1" />;
        } else if (status === 'ASSIGNED') {
          color = 'blue';
          icon = <FaUserCheck className="mr-1" />;

        }

        return (
          <Tag color={color}>
            <div className="flex items-center">
              {icon}
              {status.toUpperCase()}
            </div>
          </Tag>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Dropdown
          overlay={
            <Menu className='cursor-pointer'>
              <Menu.Item key="1">
                <div
                  className="flex items-center space-x-2"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation(); 
                  }}
                >
                  <FormOutlined className="mr-1" /> <span>Edit</span>
                </div>
              </Menu.Item>
              <Menu.Item key="2">
                <div
                  className="flex items-center space-x-2"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation(); 
                  }}
                >
                  <EditOutlined className="mr-2" /> <span>Report Fault</span>
                </div>
              </Menu.Item>
              <Menu.Item key="3">
                <div
                  className="flex items-center space-x-2"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation(); 
                  }}
                >
                  <FileExcelOutlined /> <span>Disable</span>
                </div>
              </Menu.Item>
              <Menu.Item key="4">
                <div
                  className="flex items-center space-x-2"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                  }}
                >
                  <DeleteOutlined className="mr-1" />  <span>Delete</span>
                </div>
              </Menu.Item>
            </Menu>
          }
        >
          <div
            className="flex justify-center items-center space-x-2 font-semibold border-2 w-20 p-1 cursor-pointer"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <p className="text-black">
              Action
            </p>
            <FaChevronDown className="mt-1" />
          </div>
        </Dropdown>
      ),
    },
  ];


  const handleRowClick = (record: Vehicle) => {
    setSelectedVehicle(record);  
    setIsModalOpen(true);  
  };

  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Table
        columns={columns}
        size='small'
        dataSource={data}
        className="px-4"
        onRow={(record) => {
          return {
            onClick: () => handleRowClick(record),  
          };
        }}
      />

      
      <Modal
        title={false}
        visible={isModalOpen}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        footer={null}
      >
        {selectedVehicle && (
          <div>
            <VehicleDetails/>
          </div>
        )}
      </Modal>
    </>
  );
};

export default VehicleTable;
