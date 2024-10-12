import React, { useState } from 'react';
import { Table, Tag, Dropdown, Menu, Pagination, Button } from 'antd';
import {CheckCircleOutlined, DownOutlined, FormOutlined, PlusOutlined, ReloadOutlined, StopOutlined, UploadOutlined } from '@ant-design/icons';
import NewUserModal from './NewUser'; 
import SelectBar from './SelectUser';
import DisableUserModal from './DisableUserModal';
import bad from '../../assets/bad1.svg'
import good from '../../assets/good5.svg'
import SelectRole from './SelectRole';
import SearchUser from './SearchUser';
import Usersummary from './UserSummary';
import UserInfoModal from './UserInfo';

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
  const [disableUserModalVisible, setDisableUserModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery]=useState<string>('')
  const [statusFilter, setStatusFilter]= useState<string|null>(null);
  const [roleFilter, setRoleFilter] = useState<string|null>(null);
  const [selectUser,setSelectUser]= useState<User|null>(null);
  const [isUserModalVisible, setIsUserModalVisible] = useState(false)

  const [users, setUsers] = useState<User[]>([
    { key: '1', sn: 1, name: 'Obicheozo Lily', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Admin', status: 'ACTIVE' },
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
    { key: '12', sn: 12, name: 'Obicheozo  Nkeiruka', email: 'lilypromise99@gmail.com', phone: '0814381377', role: 'Admin', status: 'INACTIVE' },
    { key: '13', sn: 13, name: 'Obicheozo Lily Nkeiruka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Admin', status: 'INACTIVE' },
    { key: '14', sn: 14, name: 'Emeka', email: 'lilypromise99@gmail.com', phone: '09134421366', role: 'Admin', status: 'INACTIVE'},
  ]);

const handleRowClick=(record:User)=>{
  setSelectUser(record);
  setIsUserModalVisible(true)
}

  const handleResetFilters=()=>{
    setStatusFilter('');
    setRoleFilter('');
    setSearchQuery('')
    setCurrentPage(1); 
  }
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  }

  const handleStatuschange = (status: string | null) => {
    setStatusFilter(status);
  }

  const handleRolechange = (role:string | null) => {
    setRoleFilter(role);
  }

  const filteredUsers = users.filter((user)=>{
      const matchesSearch = user.name.toLowerCase().includes(searchQuery) || user.email.toLowerCase().includes(searchQuery)|| user.phone.includes(searchQuery);
    const matchesStatus = statusFilter ? user.status === statusFilter : true;
    const matchesRole = roleFilter ? user.role===roleFilter:true;
    return matchesSearch && matchesStatus && matchesRole;
    }
)
  
const totalUsers=users.length;
const activeUsers=users.filter((user)=>user.status==='ACTIVE').length;
const inactiveUsers=users.filter((user)=>user.status==='INACTIVE').length;

  const columns = [
    { title: 'S/N', dataIndex: 'sn', key: 'sn', render: (_: any, __: User, index: number) => <div className="pl-3">{(currentPage - 1) * pageSize + index + 1}</div> },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone No', dataIndex: 'phone', key: 'phone' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: 'ACTIVE' | 'INACTIVE') => {
        const color = status === 'ACTIVE' ? 'blue' : '#F0F1F3';
        const icon = status === 'ACTIVE' ? <img src={good} alt="Active" className="mr-2" /> : <img src={bad} alt="Inactive" className="mr-2" />;
        const textStyle = status === 'ACTIVE' ? { fontWeight: 500 } : { color: '#777777', fontWeight: 600 };
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
      render: (_: any, record: User) => (
        <Dropdown
          overlay={
            <Menu>
              {record.status === 'ACTIVE' ? (
                <>
                  <Menu.Item key="1" icon={<FormOutlined />} onClick={(e) => e.domEvent.stopPropagation()}>
                    Edit
                  </Menu.Item>
                  <Menu.Item key="2" icon={<StopOutlined />}  onClick={(e) => { e.domEvent.stopPropagation(); handleDisableClick(record); }}>
                    Disable
                  </Menu.Item>
                </>
              ) : (
                <Menu.Item key="3" icon={<CheckCircleOutlined />} onClick={(e) => { e.domEvent.stopPropagation(); handleEnableClick(record); }}>

                  Enable
                </Menu.Item>
              )}
            </Menu>
          }
        >
      <Button onClick={(e) => e.stopPropagation()}>
            <h2 className="font-semibold">Action</h2><DownOutlined />
          </Button>
        </Dropdown>
      ),
    },
  ];

//   const paginatedData = users.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleDisableClick = (user: User) => {
    setSelectedUser(user);
    setDisableUserModalVisible(true);
  };

  const handleDisableModalCancel = () => {
    setDisableUserModalVisible(false);
    setSelectedUser(null);
  };

  const handleDisableUser = () => {
    if (selectedUser) {
      const updatedUsers: User[] = users.map((user) =>
        user.key === selectedUser.key ? { ...user, status: 'INACTIVE' } : user
      );
      setUsers(updatedUsers);
    }
    setDisableUserModalVisible(false);
    setSelectedUser(null);
  };

  const handleEnableClick = (user: User) => {
    const updatedUsers: User[] = users.map((u) =>
      u.key === user.key ? { ...u, status: 'ACTIVE' } : u
    );
    setUsers(updatedUsers);
  };

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
          <div className="text-2xl font-bold">Users</div>
          <div><p className="text-gray-500 text-sm">You have a total of {users.length} users</p></div>
        </div>
        <span className="flex items-center space-x-2">
        <Button  onClick={handleResetFilters} className='text-gray-600 h-[37px] '>
            Reset Filter<ReloadOutlined className="" />
          </Button>
          <Button className="flex items-center border-gray-400 text-gray-600  h-[36px]" style={{ borderColor: '#D3D3D3' }}>
            Generate Report <UploadOutlined />
          </Button>
          <Button type="primary" onClick={showModal}>
            New User <PlusOutlined className="text-white" />
          </Button>
        </span>
      </div>

      <div className="flex space-x-12">
        <SearchUser onSearch={handleSearch}/>
        <SelectBar onStatuschange={handleStatuschange} />
        <SelectRole onRoleChange={handleRolechange} />
      </div>
       <div><Usersummary
       total={totalUsers}
       active={activeUsers}
       inactive={inactiveUsers}
       /></div>
      <Table columns={columns} dataSource={filteredUsers.slice((currentPage - 1) * pageSize, currentPage * pageSize)} pagination={false} size="small" 
      onRow={(record)=>({
        onClick:()=>handleRowClick(record)
      })}
      />

      <div className="flex justify-end p-2 bg-white">
        <Pagination defaultCurrent={currentPage} total={filteredUsers.length} showSizeChanger={false} pageSize={pageSize} onChange={handlePaginationChange} />
      </div>

      <NewUserModal visible={isModalVisible} onCancel={handleModalCancel} onSubmit={handleNewUserSubmit} />

      <DisableUserModal
        visible={disableUserModalVisible}
        onCancel={handleDisableModalCancel}
        onDisable={handleDisableUser}
        userName={selectedUser ? selectedUser.name : ''}
      />

{selectUser && (
        <UserInfoModal
        personData={selectUser}
        visible={isUserModalVisible}
          onOk={() => setIsUserModalVisible(false)}
          onCancel={() => setIsUserModalVisible(false)}
      
        />      
      )}
    </div>
 

  );
};

export default UsersTable;
