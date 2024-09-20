import React, { useState } from 'react'; 
import { Table, Tag, Modal, Dropdown, Menu } from 'antd';
import { FaCheckCircle, FaChevronDown, FaTimesCircle, FaUserCheck } from 'react-icons/fa';
import { FormOutlined, EyeOutlined, StopOutlined } from '@ant-design/icons';
import Bus1 from '../assets/Bus1.svg'; 
import VehicleDetails from './VehicleInfo';
import ReportFaultModal from './ReportFault';

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
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);  // State for Report Fault Modal
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); 
  const [actionClicked, setActionClicked] = useState(false);  // Track whether an action was clicked

  const data: Vehicle[] = [
    { key: '1', sn: 1, name: 'Bus Gold', code: 'APP-456CV', type: 'Coach Bus', color: 'White', seat: '20', status: 'AVAILABLE' },
    { key: '2', sn: 2, name: 'Bus Silver', code: 'APP-456CV', type: 'Coach Bus', color: 'Silver', seat: '20', status: 'ASSIGNED' },
    { key: '3', sn: 3, name: 'Bus Platinum', code: 'APP-456CV', type: 'Coach Bus', color: 'Black', seat: '24', status: 'FAULTY' },
    { key: '4', sn: 4, name: 'Bus Gold', code: 'APP-456CV', type: 'Coach Bus', color: 'White', seat: '20', status: 'AVAILABLE' },
    { key: '5', sn: 5, name: 'Bus Silver', code: 'APP-456CV', type: 'Coach Bus', color: 'Silver', seat: '20', status: 'ASSIGNED' },
    { key: '6', sn: 6, name: 'Bus Platinum', code: 'APP-456CV', type: 'Coach Bus', color: 'Black', seat: '24', status: 'FAULTY' },
    { key: '7', sn: 7, name: 'Bus Gold', code: 'APP-456CV', type: 'Coach Bus', color: 'White', seat: '20', status: 'AVAILABLE' },
    { key: '8', sn: 8, name: 'Bus Silver', code: 'APP-456CV', type: 'Coach Bus', color: 'Silver', seat: '20', status: 'ASSIGNED' },
    { key: '9', sn: 9, name: 'Bus Platinum', code: 'APP-456CV', type: 'Coach Bus', color: 'Black', seat: '24', status: 'FAULTY' },
    { key: '10', sn: 10, name: 'Bus Gold', code: 'APP-456CV', type: 'Coach Bus', color: 'White', seat: '20', status: 'AVAILABLE' },
    { key: '11', sn: 11, name: 'Bus Silver', code: 'APP-456CV', type: 'Coach Bus', color: 'Silver', seat: '20', status: 'ASSIGNED' },
    { key: '12', sn: 12, name: 'Bus Platinum', code: 'APP-456CV', type: 'Coach Bus', color: 'Black', seat: '24', status: 'FAULTY' },
    { key: '13', sn: 13, name: 'Bus Gold', code: 'APP-456CV', type: 'Coach Bus', color: 'White', seat: '20', status: 'AVAILABLE' },
    { key: '14', sn: 14, name: 'Bus Silver', code: 'APP-456CV', type: 'Coach Bus', color: 'Silver', seat: '20', status: 'ASSIGNED' },
    { key: '15', sn: 15, name: 'Bus Platinum', code: 'APP-456CV', type: 'Coach Bus', color: 'Black', seat: '24', status: 'FAULTY' },
    { key: '16', sn: 16, name: 'Bus Gold', code: 'APP-456CV', type: 'Coach Bus', color: 'White', seat: '20', status: 'AVAILABLE' },
    { key: '17', sn: 17, name: 'Bus Silver', code: 'APP-456CV', type: 'Coach Bus', color: 'Silver', seat: '20', status: 'ASSIGNED' },
    { key: '18', sn: 18, name: 'Bus Platinum', code: 'APP-456CV', type: 'Coach Bus', color: 'Black', seat: '24', status: 'FAULTY' },
    
  ];

  const columns = [
    { title: 'S/N', dataIndex: 'sn', key: 'sn' },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Vehicle) => (
        <div className="flex items-center space-x-2">
          <img src={Bus1} alt="Bus Icon" className="h-10 w-10 bg-[#BA41321A]  rounded-full" />
          <div className="flex flex-col">
            <p className="font-medium">{text}</p>
            <span className="text-sm text-[#FF742C] font-medium">{record.code}</span>
          </div>
        </div>
      ),
    },
    { title: 'TYPE', dataIndex: 'type', key: 'type' },
    { title: 'COLOR', dataIndex: 'color', key: 'color' },
    { title: 'Number of Seat', dataIndex: 'seat', key: 'seat' },
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
          <Tag color={color} className='border-none rounded-lg'>
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
                <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                  <FormOutlined className="mr-1" /> <span>Edit</span>
                </div>
              </Menu.Item>
              <Menu.Item key="2">
                <div className="flex items-center space-x-2" 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActionClicked(true);  // Set action clicked to true
                    setIsReportModalOpen(true);  // Open Report Fault modal
                  }}>
                  <EyeOutlined className="mr-2" /> <span>Report Fault</span>
                </div>
              </Menu.Item>
              <Menu.Item key="3">
                <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                  <StopOutlined /> <span>Disable</span>
                </div>
              </Menu.Item>
            </Menu>
          }
        >
          <div
            className="flex justify-center items-center space-x-2 font-semibold border-2 w-20 p-1 cursor-pointer"
            onClick={(e) => e.stopPropagation()}  // Prevent row click
          >
            <p className="text-black">Action</p>
            <FaChevronDown className="mt-1" />
          </div>
        </Dropdown>
      ),
    },
  ];

  const handleRowClick = (record: Vehicle) => {
    if (!actionClicked) {  // Only open VehicleDetails if no action was clicked
      setSelectedVehicle(record);  
      setIsModalOpen(true);  
    }
    setActionClicked(false);  // Reset action clicked state
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleReportModalClose = () => {
    setIsReportModalOpen(false);
  };

  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFaultSubmit = () => {
    console.log('Fault report submitted.');
    setIsReportModalOpen(false);  
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: data.length,
          onChange: handlePaginationChange,
          showSizeChanger: false, 
        }}
        size='small'
        className="px-4"
        onRow={(record) => {
          return {
            onClick: () => handleRowClick(record),  // Modal only opens on row click, excluding the action button
          };
        }}
      />

      {/* Vehicle Details Modal */}
      <Modal
        centered={true}
        closeIcon={false}
        title={false}
        visible={isModalOpen}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        footer={null}
        className='custom-modal'
      >
        {selectedVehicle && (
          <div>
            <VehicleDetails />
          </div>
        )}
      </Modal>

         <ReportFaultModal
         isVisible={isReportModalOpen}   
         onClose={handleReportModalClose} 
         onSubmit={handleFaultSubmit}
         />
        
    </>
  );
};

export default VehicleTable;



