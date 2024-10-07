import React, { useState } from 'react';
import { Table, Dropdown, Menu, Button, Pagination, Tag } from 'antd';
import { DownOutlined, EditOutlined, DeleteOutlined, StopOutlined, PlusOutlined, UploadOutlined, CheckCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import Searchbar from './searchBar';
import SelectBar from './selectbar';
import LoadingBayModal from './loadingBayModal';
import DeleteModal from './deleteModal';
import DisableModal from './disableLoadingModal';
import SelectLoadingBar from './SelectLoadingBay';
import EditModal from './EditModal';
import bad from '../../assets/bad1.svg';
import good from '../../assets/good5.svg';


const LoadingBays: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isDisableModalVisible, setIsDisableModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  const [selectedBayKey, setSelectedBayKey] = useState<string | null>(null);
  const [selectedBayName, setSelectedBayName] = useState<string | null>(null);
  const [selectedBayAddress, setSelectedBayAddress] = useState<string | null>(null);

  const [loadingBay, setLoadingBay] = useState('');
  const [address, setAddress] = useState('');
  const [loadingBayError, setLoadingBayError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [searchQuery, setSearchQuery]=useState('')
  const[selectedStatus, setSelectedStatus] = useState<string |null>(null);
  const [addressFilter, setAddressFilter] = useState<string>('');

  const pageSize = 10;

  const [data, setData] = useState([
    { key: '1', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction imo', status:'ACTIVE' },
    { key: '2', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction imo', status:'ACTIVE'  },
    { key: '3', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction' , status:'ACTIVE' },
    { key: '4', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction' , status:'ACTIVE' },
    { key: '5', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction' , status:'ACTIVE' },
    { key: '6', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
    { key: '7', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
    { key: '8', name: 'Owerri Main ', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
    { key: '9', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
    { key: '10', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
    { key: '11', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
    { key: '12', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
    { key: '13', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
    { key: '14', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
    { key: '15', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
    { key: '16', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
    { key: '17', name: 'lagos', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
  ]);

  const filteredData = data.filter((bay) => {
    const searchString = searchQuery.toLowerCase();
    const matchesSearch = bay.name.toLowerCase().includes(searchString) || bay.address.toLowerCase().includes(searchString);
    const matchesStatus = selectedStatus ? bay.status === selectedStatus : true;
    const matchesAddress = bay.address.toLowerCase().includes(addressFilter.toLowerCase())

    return matchesSearch && matchesStatus && matchesAddress;
  });

  const handleResetFilters=()=>{
    setSearchQuery('');
    setSelectedStatus(null);
    setAddressFilter('');
    setCurrentPage(1);
    
  };


  


  const columns = [
    {
      title: 'S/N',
      dataIndex: 'key',
      key: 'key',
      width: '50px',
      render: (text: any, record: any, index: number) => <div className="pl-3">{(currentPage - 1) * pageSize + index + 1}</div>,
    },
    {
      title: 'Loading Bay',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: 'ACTIVE' | 'INACTIVE') => {
        let color = status === 'ACTIVE' ? 'blue' : '#F0F1F3';
        let icon = status === 'ACTIVE' ? <img src={good} alt="Logo" className="mr-2" /> : <img src={bad} alt="Logo" className="mr-2" />;
        let textStyle = status === 'ACTIVE' ? { fontWeight: 500 } : { color: '#777777', fontWeight: 600 };


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
      render: (record: any) => (
        <Dropdown
          overlay={
            <Menu>
              {record.status === 'ACTIVE' ? (
                <>
                  <Menu.Item key="edit" icon={<EditOutlined />} onClick={() => openEditModal(record)}>
                    Edit
                  </Menu.Item>
                  <Menu.Item key="disable" icon={<StopOutlined />} onClick={() => openDisableModal(record)}>
                    Disable
                  </Menu.Item>
                </>
              ) : (
                <Menu.Item key="enable" icon={<CheckCircleOutlined  />} onClick={() => handleEnable(record)}>
                  Enable
                </Menu.Item>
              )}
              <Menu.Item key="delete" icon={<DeleteOutlined />} onClick={() => openDeleteModal(record)}>
                Delete
              </Menu.Item>
            </Menu>

          }
        >
          <Button type="default" className="font-semibold">
            Action <DownOutlined />
          </Button>
        </Dropdown>
      ),
    },
  ];

  const handleAddressFilter=(address:string) =>{
    setAddressFilter(address)
  }

  const handleStatusChange =(status:string) => {
    setSelectedStatus(status);
  }

  const handleSearch = (query:string)=>{
    setSearchQuery(query)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setLoadingBay('');
    setAddress('');
    setLoadingBayError('');
    setAddressError('');
  };

  const openEditModal = (record: any) => {
    setSelectedBayKey(record.key);
    setSelectedBayName(record.name);
    setSelectedBayAddress(record.address);
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
    setSelectedBayName(null);
    setSelectedBayAddress(null);
  };

  const handleEditProceed = (editedBay: { name: string; address: string }) => {
    const updatedData = data.map((bay) => (bay.key === selectedBayKey ? { ...bay, name: editedBay.name, address: editedBay.address } : bay));
    setData(updatedData);
    closeEditModal();
  };

  const openDeleteModal = (record: any) => {
    setSelectedBayKey(record.key);
    setSelectedBayName(record.name);
    setIsDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalVisible(false);
  };

  const handleDelete = () => {
    if (selectedBayKey) {
      const updatedData = data.filter((bay) => bay.key !== selectedBayKey);
      const reindexedData = updatedData.map((bay, index) => ({
        ...bay,
        key: (index + 1).toString(),
      }));
      setData(reindexedData);
    }
    closeDeleteModal();
  };

  const openDisableModal = (record: any) => {
    setSelectedBayKey(record.key);
    setSelectedBayName(record.name);
    setIsDisableModalVisible(true);
  };

  const closeDisableModal = () => {
    setIsDisableModalVisible(false);
  };

  const handleDisable = () => {
    if(selectedBayKey){
      const updatedDate=data.map((bay) =>
    bay.key === selectedBayKey ? {...bay, status:'INACTIVE'} : bay
      );
      setData(updatedDate)
    }
    closeDisableModal();
  };
  const handleEnable=(record:any)=>{
    const updatedDate = data.map((bay)=>
   bay.key===record.key ? {...bay, status:'ACTIVE'}:bay
    )
    setData(updatedDate);
  }

  const handleProceed = () => {
    setLoadingBayError('');
    setAddressError('');

    if (!loadingBay) {
      setLoadingBayError('Loading Bay is required');
    }
    if (!address) {
      setAddressError('Address is required');
    }
    if (loadingBay && address) {
      const newData = {
        key: (data.length + 1).toString(),
        name: loadingBay,
        address: address,
        status:'ACTIVE'
      };
      setData([...data, newData]);
      closeModal();
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <div className="text-2xl font-bold">Loading Bay</div>
          <div>
            <p className="text-gray-500 text-sm">You have a total of {data.length} loading bays</p>
          </div>
        </div>
        <span className="flex items-center space-x-2">
        <Button  onClick={handleResetFilters} className='text-gray-600 h-[37px] '>
            Reset Filter<ReloadOutlined className="" />
          </Button>
          <Button className="flex items-center border-gray-400 text-gray-600  h-[36px]">
            Generate Report <UploadOutlined />
          </Button>
          <Button type="primary" onClick={openModal}>
            New Loading Bay <PlusOutlined className="text-white" />
          </Button>
          
        </span>
      </div>

      <div className="flex space-x-12 mt-1 mb-2">
        <Searchbar onSearch={handleSearch}/>
        <div>
          <SelectBar handleStatusChange={handleStatusChange}/>
        </div>
        <SelectLoadingBar handleAddressFilter={handleAddressFilter} />
      </div>

      <Table columns={columns} dataSource={filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize)} pagination={false} size="small" />

      <div className="flex justify-end items-center p-2 bg-white">
        <Pagination defaultCurrent={currentPage} total={filteredData.length} pageSize={pageSize} onChange={handlePageChange} showSizeChanger={false} />
      </div>

      <LoadingBayModal
        visible={isModalVisible}
        onClose={closeModal}
        loadingBay={loadingBay}
        setLoadingBay={setLoadingBay}
        address={address}
        setAddress={setAddress}
        onProceed={handleProceed}
        loadingBayError={loadingBayError}
        addressError={addressError}
      />

      <DeleteModal visible={isDeleteModalVisible} onCancel={closeDeleteModal} onOk={handleDelete} bayName={selectedBayName} />

      <DisableModal visible={isDisableModalVisible} onCancel={closeDisableModal} onOk={handleDisable} bayName={selectedBayName} />

      
      {selectedBayName && selectedBayAddress && (
        <EditModal visible={isEditModalVisible} onClose={closeEditModal} onProceed={handleEditProceed} bayName={selectedBayName} bayAddress={selectedBayAddress} />
      )}
    </div>
  );
};

export default LoadingBays;

// { key: '1', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE' },
//     { key: '2', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
//     { key: '3', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction' , status:'ACTIVE' },
//     { key: '4', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction' , status:'ACTIVE' },
//     { key: '5', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction' , status:'ACTIVE' },
//     { key: '6', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
//     { key: '7', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
//     { key: '8', name: 'Owerri Main ', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
//     { key: '9', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
//     { key: '10', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
//     { key: '11', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
//     { key: '12', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
//     { key: '13', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
//     { key: '14', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
//     { key: '15', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
//     { key: '16', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
//     { key: '17', name: 'Owerri Main Office', address: 'K/M 2 Owerri Onitsha Express Way, Yaradu Junction', status:'ACTIVE'  },
// const openDeleteModal = (record: any) => {
//   setSelectedBayKey(record.key);
//   setSelectedBayName(record.name);
//   setIsDeleteModalVisible(true);
// };
