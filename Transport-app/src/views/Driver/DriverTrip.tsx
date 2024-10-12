import React, { useState } from 'react';
import { Table, Tag, Button, Dropdown, Menu, Pagination } from 'antd';
import { DownOutlined, UploadOutlined } from '@ant-design/icons';
import SearchDriver from './SearchDriver';
import SelectStatus from './selectStatus';
import SelectDate from './selectDate';
import arrow from '../../assets/arrow both.png';
import BusG from '../../assets/BusGroup.png';
import AvatarGroup from './AvatarGroup';
import report from '../../assets/ReportFault.svg';
import end from '../../assets/EndTrip.svg';
import delayed from '../../assets/Delayed.svg';
import closed from '../../assets/Close.svg';
import EndTripModal from './driverEndTrip';
import TransportModal from './TripDetail';
import ReportIncident from './ReportIncident';

// Type definition for each row data
interface TripData {
  key: string;
  to:string;

  sn: number;
  route: string;
  duration: string;
  date: string;
  price: string;
  status: 'CLOSED' | 'DELAYED';
//   delayed by what time
}

const TripHistory: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const[isEndTripModalVisible, setIsEndTripModalVisible]=useState(false);
  const [selectedTrip, setSelectedTrip] = useState<TripData | null>(null);
  const[isModalVisible,setIsModalVisible] = useState(false)
  const[isReportincidentModalVisible, setIsReportincidentModalVisible]=useState(false);
  const pageSize = 10;

  const [data] = useState<TripData[]>([
    { key: '1', sn: 1, route: 'Jubi ', duration: '2 hours', date: '13/09/2024', price: '#45,000', status: 'DELAYED',to:'Abuja' },
    { key: '2', sn: 2, route: 'Jubi ', duration: '2 hours', date: '13/09/2024', price: '#45,000', status: 'DELAYED', to:'Abuja' },
    { key: '3', sn: 3, route: 'Jubi ', duration: '2 hours', date: '13/09/2024', price: '#45,000', status: 'CLOSED',to:'Abuja'  },
    { key: '4', sn: 4, route: 'Jubi', duration: '2 hours', date: '13/09/2024', price: '#45,000', status: 'DELAYED',to:'Abuja'  },
    { key: '5', sn: 5, route: 'Jubi', duration: '2 hours', date: '13/09/2024', price: '#45,000', status: 'DELAYED',to:'Abuja'  },
    { key: '6', sn: 6, route: 'Jubi', duration: '2 hours', date: '13/09/2024', price: '#45,000', status: 'CLOSED',to:'Abuja'  },
    { key: '7', sn: 7, route: 'Jubi', duration: '2 hours', date: '13/09/2024', price: '#45,000', status: 'DELAYED',to:'Abuja'  },
    { key: '8', sn: 8, route: 'Jubi', duration: '2 hours', date: '13/09/2024', price: '#45,000', status: 'DELAYED',to:'Abuja'  },
    { key: '9', sn: 9, route: 'Jubi', duration: '2 hours', date: '13/09/2024', price: '#45,000', status: 'CLOSED',to:'Abuja'  },
    { key: '10', sn: 10, route: 'Jubi', duration: '2 hours', date: '13/09/2024', price: '#45,000', status: 'CLOSED',to:'Abuja'  },
    { key: '11', sn: 11, route: 'Jubi', duration: '2 hours', date: '13/09/2024', price: '#45,000', status: 'DELAYED',to:'Abuja'  },
    { key: '12', sn: 12, route: 'Jubi', duration: '2 hours', date: '13/09/2024', price: '#45,000', status: 'DELAYED',to:'Abuja'  },
    { key: '13', sn: 13, route: 'Jubi', duration: '2 hours', date: '13/09/2024', price: '#45,000', status: 'CLOSED',to:'Abuja'  },
    { key: '14', sn: 14, route: 'Jubi', duration: '2 hours', date: '13/09/2024', price: '#45,000', status: 'CLOSED',to:'Abuja'  },
  ]);
  
  const handleRowClick=(record:TripData)=>{
    setSelectedTrip(record);
    setIsModalVisible(true);
  }
  const handleMenuClick = (key: string) => {
    if (key==='2') {
        setIsEndTripModalVisible(true);
         }else if (key === '1'){
          setIsReportincidentModalVisible(true);
         }
    console.log(`Selected action: ${key}`);
};

  // Dropdown menu for actions
  const menu = (
    <Menu onClick={({ key }) => handleMenuClick(key)}>
      <Menu.Item key="1" onClick={(e) => e.domEvent.stopPropagation()}>
        <div className="flex space-x-2">
          <img src={report} alt="" />
          <span>Report Delay</span>
        </div>
      </Menu.Item>
      <Menu.Item key="2" onClick={(e) => e.domEvent.stopPropagation()}>
        <div className="flex space-x-2">
          <img src={end} alt="" />
          <span>End Trip</span>
        </div>
      </Menu.Item>
      {/* <Menu.Item key="3" onClick={(e) => e.domEvent.stopPropagation()}>
        <div className="flex space-x-2">
          <img src={view} alt="" />
          <span>View Details</span>
        </div>
      </Menu.Item> */}
    </Menu>
  );

  // Table columns definition
  const columns = [
    {
        title: 'S/N',
        dataIndex: 'sn',
        key: 'sn',
        render: (_: any, __: TripData, index: number) => <div className="pl-3">{(currentPage - 1) * pageSize + index + 1}</div>,
      },
  
    { title: 'ROUTE', dataIndex: 'route', key: 'route', 
render:(text:string,record:TripData)=>(
<div className='flex space-x-1'> <p>{text}</p><div><img src={arrow} alt="" className='mt-1'/></div><div>{record.to}</div>
</div>
),

    },
    { title: 'Duration', dataIndex: 'duration', key: 'duration' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status: 'CLOSED' | 'DELAYED') => {
          const color = status === 'CLOSED' ? '#F0F1F3' : '#FDF7DD';
          const icon =
            status === 'CLOSED' ? (
              <img src={closed} alt="Closed" className="mr-2" />
            ) : (
              <img src={delayed} alt="Delayed" className="mr-2" />
            );
          const textStyle =
            status === 'CLOSED' ? { color: '#777777', fontWeight: 500 } : { color: '#B9A325', fontWeight: 600 };
          return (
            <Tag color={color} className="border-none rounded-lg">
              <div className="flex items-center">
                {icon}
                <span style={textStyle}>{status.toUpperCase()}</span>
              </div>
            </Tag>
          );
        },
      },
      
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Dropdown overlay={menu} trigger={['click']}>
          <Button onClick={(e) => e.stopPropagation()} >
         <h2 className='font-semibold'>Action </h2><DownOutlined />
          </Button>
        </Dropdown>
      ),
    },
  ];

  
  const paginatedData = data.slice((currentPage-1)* pageSize,currentPage*pageSize);

  return (
    <div>
      <div className="flex mb-6">
        <div>
            <div className='flex justify-between'>
          
          <div className="flex space-x-2">
            <h3 className='text-lg font-bold'>Current Trip</h3>
          </div>
          <Button
          className="flex items-center border-gray-400 text-gray-600 mr-2 h-[36px]" style={{
         borderRadius:"",
         borderColor:"#D3D3D3",
         }}
         >
         Generate Report <UploadOutlined/>
         </Button>
          </div>
          <div className="flex space-x-12 mt-3">
            <div>
              <SearchDriver />
            </div>
            <div>
              <SelectStatus />
            </div>
            <div>
              <SelectDate />
            </div>
          </div>
          <div className="hover:cursor-pointer">
            <div className="relative flex">
              <div className="text-gray-500 relative flex-row">
                <div className="flex space-x-8 mt-3 mb-2">
                  <div className="flex-row">
                    <p>Travelling From</p>
                    <p className="text-black">Jubi</p>
                  </div>
                  <div>
                    <p>Travelling To</p>
                    <p className="text-black">Abuja</p>
                  </div>
                </div>
                <div className="flex space-x-20 mb-2">
                  <div>
                    <p>Duration</p>
                    <p className="text-black">2 hours</p>
                  </div>
                  <div>
                    <p>Date</p>
                    <p className="text-black">13/09/2024</p>
                  </div>
                </div>
                <div className="flex-row">
                  <p>Price</p>
                  <p className="text-black">#45,000</p>
                </div>
              </div>
              <div className="ml-80">
                <img src={BusG} alt="BusGroup" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-10 leading-tight">
            <div className="flex">
              <AvatarGroup />
             
 <span className='mt-2'>+10</span></div>
            <Button type="primary" className='w-[153px] h-[32px]'>
            Start Trip
          </Button>
          </div>
        
        </div>
      </div>

      <p className=' mb-1 leading-tight'>History</p>
      <Table
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
        size='small'
        onRow={(record)=>({
            onClick:()=>handleRowClick(record)
        })}
      />

      {/* Pagination */}
      <div className="flex justify-end p-2 bg-white">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={data.length} // Total records count
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
      <div>
      <EndTripModal visible={isEndTripModalVisible} onOk={() => setIsEndTripModalVisible(false)} onCancel={() => setIsEndTripModalVisible(false)} />
      </div>
      <div>
      <ReportIncident visible={isReportincidentModalVisible} onOk={() => setIsReportincidentModalVisible(false)} onCancel={() => setIsReportincidentModalVisible(false)} />
      </div>
{selectedTrip && (
        <TransportModal
        visible={isModalVisible}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => setIsModalVisible(false)}
          trip={selectedTrip} 
        />      
      )}
    </div>
  );
};

export default TripHistory;
