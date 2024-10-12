import { Table, Dropdown, Button, Menu, } from 'antd';
import {  DownOutlined } from '@ant-design/icons';
import Claimsummary from './ClaimSummary'

import close from '../../assets/closeTick.svg'
import pend from '../../assets/pendingTick.svg'
import good from '../../assets/tickGood.svg'


const data = [
    
     {key: '1',tripId: 'Trp-2024-001', incidentType:'Accident',location:'Abuja',description:'Three injuries sustained',witness:'Obicheozo Lily N', phone: '09134421366',status: 'SETTLED',},
     {key: '2',tripId: 'Trp-2024-001', incidentType:'Accident',location:'Abuja',description:'Three injuries sustained',witness:'Obicheozo Lily N', phone: '09134421366',status: 'SETTLED',},
     {key: '3',tripId: 'Trp-2024-001', incidentType:'Accident',location:'Abuja',description:'Three injuries sustained',witness:'Obicheozo Lily N', phone: '09134421366',status: 'PENDING',},
     {key: '4',tripId: 'Trp-2024-001', incidentType:'Accident',location:'Abuja',description:'Three injuries sustained',witness:'Obicheozo Lily N', phone: '09134421366',status: 'PENDING',},
     {key: '5',tripId: 'Trp-2024-001', incidentType:'Accident',location:'Abuja',description:'Three injuries sustained',witness:'Obicheozo Lily N', phone: '09134421366',status: 'SETTLED',},
     {key: '6',tripId: 'Trp-2024-001', incidentType:'Accident',location:'Abuja',description:'Three injuries sustained',witness:'Obicheozo Lily N', phone: '09134421366',status: 'SETTLED',},
     {key: '7',tripId: 'Trp-2024-001', incidentType:'Accident',location:'Abuja',description:'Three injuries sustained',witness:'Obicheozo Lily N', phone: '09134421366',status: 'REJECTED',},
     {key: '8',tripId: 'Trp-2024-001', incidentType:'Accident',location:'Abuja',description:'Three injuries sustained',witness:'Obicheozo Lily N', phone: '09134421366',status: 'REJECTED',},
     {key: '9',tripId: 'Trp-2024-001', incidentType:'Accident',location:'Abuja',description:'Three injuries sustained',witness:'Obicheozo Lily N', phone: '09134421366',status: 'SETTLED',},
     {key: '10',tripId: 'Trp-2024-001', incidentType:'Accident',location:'Abuja',description:'Three injuries sustained',witness:'Obicheozo Lily N', phone: '09134421366',status: 'SETTLED',},
     {key: '11',tripId: 'Trp-2024-001', incidentType:'Accident',location:'Abuja',description:'Three injuries sustained',witness:'Obicheozo Lily N', phone: '09134421366',status: 'SETTLED',},
  ];
  
  const columns = [
    {
      title: <div style={{marginLeft:'18px'}}>Trip Id</div>,
      dataIndex: 'tripId',
      key: 'tripId',
      render:(text:string) =>(
        <div style={{marginLeft:'18px'}}>{text}</div>
      )
    },
    {
      title: 'Incident Type',
      dataIndex: 'incidentType',
      key: 'incidentType',
      render: (text: string, record: any) => (
        <>
          <span>{text}</span>
          <div className="text-orange-500">{record.location}</div>
        </>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Witness',
      dataIndex: 'witness',
      key: 'witness',
      render: (text: string, record: any) => (
        <>
          <div>{text}</div>
          <div className="text-orange-500">{record.phone}</div>
        </>
      ),
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (status: string) => {
          let bgColor = '';
          let textColor = '';
          let Icon = null; // Default no icon
      
          if (status === 'SETTLED') {
            bgColor = 'bg-[#E3FFE6]';
            textColor = 'text-[#379D51]';
            Icon = <img src={good} alt=""  className='mr-1 ml-2'/>; 
          } else if (status === 'PENDING') {
            bgColor = 'bg-[#FDF7DD]';
            textColor = 'text-[#B9A325]';
            Icon = <img src={pend} alt="" className='mr-1 ml-2' />; 
          } else if (status === 'REJECTED') {
            bgColor = 'bg-[#FFE1E1]';
            textColor = 'text-[#F05050]';
            Icon = <img src={close} alt="" className='mr-1 ml-2'/>; 
          }
      
          return (
            <span className={`flex items-center  ${bgColor} ${textColor} rounded-full w-[93px] font-medium `}>
              {Icon} {status.toUpperCase()}
            </span>
          );
        },
      },
      
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1">View Details</Menu.Item>
              
            </Menu>
          }
        >
          <Button>
            Action <DownOutlined />
          </Button>
        </Dropdown>
      ),
    },
  ];
const Claims = () => {
   
    
  return (
    <div>
        
      <Claimsummary/>
      <div className="">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 10,
          
          
          
        }}
        size='small'
        />
   </div>
    </div>
  )
}

export default Claims
