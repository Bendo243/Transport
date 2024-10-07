import React, { useState } from 'react'; 
import { Table, Tag, Modal, Dropdown, Menu, Button } from 'antd';
import { FormOutlined, EyeOutlined, StopOutlined, DownOutlined } from '@ant-design/icons';
import Bus1 from '../assets/Bus1.svg'; 
import VehicleDetails from './VehicleInfo';
import ReportFaultModal from './ReportFault';
import DeleteModal from './DeleteModal';
import bad from '../assets/Bad.svg';
import good from '../assets/good.svg'
import assign from '../assets/Assign Icon.svg'


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
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);  
  const [rowData,setRowData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); 
  const [actionClicked, setActionClicked] = useState(false);  


  const handleRowClick = (record: any) => {
      setIsModalOpen(true)
      setRowData(record)
    };
  

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
    { title: 'S/N', dataIndex: 'sn', key: 'sn',
      render:(sn:number,) => <div className='pl-3'>{sn}</div>
     },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      
      render: (text: string, record: Vehicle) => (
        <div className="flex items-center space-x-2">
          <img src={Bus1} alt="Bus Icon" className="h-[30px] w-[30px] bg-[#BA41321A]  rounded-full" />
          <div className="flex flex-col">
            <p className="font-medium">{text}</p>
            <span className="text-sm text-[#FF742C] font-medium">{record.code}</span>
          </div>
        </div>
      ),
    },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Color', dataIndex: 'color', key: 'color' },
    { title: 'Number of Seat', dataIndex: 'seat', key: 'seat', width: '150px',},
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: Vehicle['status']) => {
        let color = '';
        let icon = null;

        if (status === 'AVAILABLE') {
          color = 'green';
          icon = <img src={good} alt="Logo" className='mr-1' />;
        } else if (status === 'FAULTY') {
          color = 'red';
          icon = <img src={bad} alt="Logo" className='mr-1' />;
        } else if (status === 'ASSIGNED') {
          color = 'blue';
          icon = <img src={assign} alt="Logo" className='mr-1' />;
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
                    setActionClicked(true);  
                    setIsReportModalOpen(true);  
                  }}>
                  <EyeOutlined className="mr-2" /> <span>Report Fault</span>
                </div>
              </Menu.Item>
              <Menu.Item key="3">
                <div className="flex items-center space-x-2" onClick={(e) => {
                  e.stopPropagation();
                  setActionClicked(true);
                  setIsDeleteModalOpen(true);
                  }}>
                  <StopOutlined className='mr-2'/> <span>Disable</span>
                </div>
              </Menu.Item>
            </Menu>
          }
        >
           <Button type='default'className='font-semibold' onClick={(e) => e.stopPropagation()}>
            Action <DownOutlined />
          </Button>
        </Dropdown>
      ),
    },
  ];


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

  const handleDelete = () =>{
    setIsDeleteModalOpen(false)
  }

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
          style:{backgroundColor:'white', padding:'10px', marginTop:'0px'},
        }}
        size='small'
        
        onRow={(record) => {
          return {
            onClick: () => handleRowClick(record),  
          };
        }}
      />

      
      <Modal
        
        closeIcon={false}
        title={false}
        open={isModalOpen}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        footer={null}
        className='custom-modal'
      >
         
          <div>
            <VehicleDetails
            onClose={handleCloseModal}
           selectedData={rowData} />
          </div>
            </Modal>

         <ReportFaultModal
         isVisible={isReportModalOpen}   
         onClose={handleReportModalClose} 
         onSubmit={handleFaultSubmit}
         />

         <DeleteModal 
         isVisible={isDeleteModalOpen} 
         onClose={()=> setIsDeleteModalOpen(false)}
         onDelete={handleDelete

         }/>
        
    </>
  );
};

export default VehicleTable;



