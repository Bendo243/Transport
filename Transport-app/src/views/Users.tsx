
import React, { useState } from "react";
import { Table, Button, Dropdown, Menu, Modal } from "antd";
import {EditOutlined, PlusOutlined, StopOutlined } from "@ant-design/icons";
import SearchBar from "./Searchbar";
import SelectBar from "./SelectBar";
import NewUserForm from "./NewUser";

 


interface User {
  key: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: "ACTIVE" | "INACTIVE"; 
}


const initialUsers: User[] = [
  {
    key: 1,
    name: "Obicheozo Lily Nkeiruka",
    email: "lilypromise99@gmail.com",
    phone: "09134421366",
    role: "Admin",
    status: "ACTIVE",
  },
  {
    key: 2,
    name: "Obicheozo Lily Nkeiruka",
    email: "lilypromise99@gmail.com",
    phone: "09134421366",
    role: "Driver",
    status: "INACTIVE",
  },
  {
    key: 3,
    name: "Obicheozo Lily Nkeiruka",
    email: "lilypromise99@gmail.com",
    phone: "09134421366",
    role: "Driver",
    status: "ACTIVE",
  },
  {
    key: 4,
    name: "Obicheozo Lily Nkeiruka",
    email: "lilypromise99@gmail.com",
    phone: "09134421366",
    role: "Driver",
    status: "ACTIVE",
  },
  {
    key: 5,
    name: "Obicheozo Lily Nkeiruka",
    email: "lilypromise99@gmail.com",
    phone: "09134421366",
    role: "Driver",
    status: "ACTIVE",
  },
  {
    key: 6,
    name: "Obicheozo Lily Nkeiruka",
    email: "lilypromise99@gmail.com",
    phone: "09134421366",
    role: "Admin",
    status: "INACTIVE",
  },
  
  
];

const Users: React.FC = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  const columns = [
    {
      title: "S/N",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "PHONE NO",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "ROLE",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      render: (status: User["status"]) => (
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            status === "ACTIVE" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "ACTION",
      key: "action",
      render: (_: any,) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="edit" icon={<EditOutlined />}>
                Edit
              </Menu.Item>
              <Menu.Item key="disable" icon={<StopOutlined />}>
                Disable
              </Menu.Item>
            </Menu>
          }
        >
          <Button>Action</Button>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="px-6 py-3">
     <div className="flex justify-between ">
     <div className=""> <div className="text-2xl font-bold mt-1 py-2  leading-3">Users </div> <p className="text-gray-400  ">4 users available</p></div>
      <span className="flex items-center ">
          <Button type="primary" onClick={showModal} className="mr-3 ">
            New user <PlusOutlined className="text-white" />
          </Button>

          <Modal
            title={false}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={
              <div className="flex justify-end space-x-3">
                <Button onClick={handleCancel} className="bottom-2 w-[144px] right-3">
                  Cancel
                </Button>
                <Button type="primary" onClick={handleOk} className="bottom-2 w-[144px] right-4">
                  Submit
                </Button>
              </div>
            }>
          <NewUserForm/>
          </Modal>
        </span>
  </div>
      <div className="flex gap-4 mb-4 mt-2">
       <SearchBar/>
        <SelectBar/>
      </div>

      <Table<User> dataSource={initialUsers} size="small" columns={columns} pagination={false} />
    </div>
  );
};

export default Users;
