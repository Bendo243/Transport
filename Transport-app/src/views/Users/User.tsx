import React, { useState } from 'react';
import { Table, Tag, Dropdown, Menu, Pagination, Button } from 'antd';
import { DownOutlined, FormOutlined, PlusOutlined, StopOutlined, UploadOutlined } from '@ant-design/icons';
import NewUserModal from './NewUser'; 
import Searchbar from './Searchbar';
import SelectBar from './SelectBar';
import DisableUserModal from './DisableUserModal';
import bad from '../../assets/bad1.svg'
import good from '../../assets/good5.svg'

interface User {
  key: string;
  sn: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: 'ACTIVE' | 'INACTIVE';
}

const UsersTable: React.FC = () => {
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [disableUserModalVisible,setDisableUserModalVisible] = useState(false);
  const[selectedUser, setSelectedUser] = useState<User | null>(null);
  
  const [users, setUsers] = useState<User[]>([
    { key: '1', sn: 1, name: 'Obicheozo Lily ', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Admin', status: 'ACTIVE' },
    { key: '2', sn: 2, name: 'Obicheozo Lily Nkeiruka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Driver', status: 'INACTIVE' },
    { key: '3', sn: 3, name: 'Obicheozo Lily Nkeiruka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Driver', status: 'INACTIVE' },
    { key: '4', sn: 4, name: 'Obicheozo Lily Nkeiruka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Driver', status: 'ACTIVE' },
    { key: '5', sn: 5, name: 'Obicheozo Lily Nkeiruka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Admin', status: 'INACTIVE' },
    { key: '6', sn: 6, name: 'Obicheozo Lily Nkeiruka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Driver', status: 'INACTIVE' },
    { key: '7', sn: 7, name: 'Obicheozo Lily Nkeiruka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Driver', status: 'ACTIVE' },
    { key: '8', sn: 8, name: 'Obicheozo Lily Nkeiruka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Driver', status: 'INACTIVE' },
    { key: '9', sn: 9, name: 'Obicheozo Lily Nkeiruka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Admin', status: 'INACTIVE' },
    { key: '10', sn: 10, name: 'Obicheozo Lily Nkeiruka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Driver', status: 'INACTIVE' },
    { key: '11', sn: 11, name: 'Obicheozo Lily Nkeiruka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Admin', status: 'ACTIVE' },
    { key: '12', sn: 12, name: 'Obicheozo  Nkeiruka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Admin', status: 'INACTIVE' },
    { key: '13', sn: 13, name: 'Obicheozo Lily Nkeiruka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Admin', status: 'INACTIVE' },
    { key: '14', sn: 14, name: 'Obicheozo Lily Nkeiruka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Admin', status: 'INACTIVE' },
  ]);

  const[currentPage,setCurrentPage] = useState<number>(1);
  const pageSize=10;
  
  const columns = [
    { title: 'S/N', dataIndex: 'sn', key: 'sn', render: (sn: number) => <div className="pl-3">{sn}</div> },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone No', dataIndex: 'phone', key: 'phone' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: 'ACTIVE' | 'INACTIVE') => {
        let color = '';
        let icon = null;
        let textStyle = {}
        if (status === 'ACTIVE') {
          color = 'blue';
          icon =  <img src={good} alt="Logo" className='mr-2' />;
          textStyle={fontWeight:500};
        } else if (status === 'INACTIVE') {
          color = '#F0F1F3';
          icon =  <img src={bad} alt="Logo" className='mr-2' />;
          textStyle ={color:'#777777', fontWeight:600};
        }
        return (
          <Tag color={color} className="border-none rounded-lg">
            <div className="flex items-center">
              {icon}
              <span style={textStyle}>
              {status.toUpperCase()}
              </span>
            </div>
          </Tag>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record:User) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1" icon={<FormOutlined />}>
                Edit
              </Menu.Item>
              <Menu.Item key="2" icon={<StopOutlined />} onClick={() => handleDisableClick(record)}> 
                Disable
              </Menu.Item>
            </Menu>
          }
        >
          <Button>
            <h2 className="font-semibold">Action</h2><DownOutlined />
          </Button>
        </Dropdown>
      ),
    },
  ];
   const paginatedData = users.slice((currentPage-1)*pageSize,currentPage *pageSize);
  const handlePaginationChange = (page:number) => {
    setCurrentPage(page);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleDisableClick =(user:User) => {
    setSelectedUser(user);
    setDisableUserModalVisible(true);
  };

  const handleDisableModalCancel = () => {
    setDisableUserModalVisible(false);
    setSelectedUser(null);
  };

  const handleDisableUser = () => {
    console.log('user disable', selectedUser?.name);
   setDisableUserModalVisible(false);
   setSelectedUser(null);
  }
  const handleNewUserSubmit = (newUser: { name: string; email: string; phone: string; role: string; status: 'ACTIVE' }) => {
    const newUserEntry: User = {
      key: (users.length + 1).toString(),
      sn: users.length + 1,
      ...newUser,
    };
    setUsers((prevUsers) => [...prevUsers, newUserEntry]);
  };
  return (
    <div>
      
      <div className="flex justify-between">
        <div>
          <div className="text-2xl font-bold ">Users</div>
          <div><p className='text-gray-500 text-sm'>You have a total of {users.length} users</p></div>
        </div>
        <span className="flex items-center">
          <div>
            <Button
              className="flex items-center border-gray-400 text-gray-600  mr-2 h-[36px]"
              style={{
                
                borderColor: '#D3D3D3',
              }}
            >
              Generate Report <UploadOutlined />
            </Button>
          </div>
          
          <Button type="primary"  onClick={showModal}>
             New User <PlusOutlined className="text-white" />
          </Button>
        </span>
       
      </div>
      <div className="flex space-x-2  mb-2 ">
        <Searchbar /> <div>  
       <SelectBar/>
      </div>
      </div>
      
      <Table columns={columns} dataSource={paginatedData} pagination={false}  size="small" />

      
      <div className="flex justify-end p-2 bg-white ">
        <Pagination defaultCurrent={currentPage} total={users.length} showSizeChanger={false} pageSize={pageSize} onChange={handlePaginationChange}/>
      </div>

      
      <NewUserModal visible={isModalVisible} onCancel={handleModalCancel} onSubmit={handleNewUserSubmit} />

      <DisableUserModal
      visible={disableUserModalVisible}
      onCancel={handleDisableModalCancel}
      onDisable={handleDisableUser}
      userName={selectedUser ? selectedUser.name:''}
      />
    </div>
  );
};

export default UsersTable;
