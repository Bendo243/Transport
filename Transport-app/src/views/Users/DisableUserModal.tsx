import React from 'react';
import { Modal, Button } from 'antd';
import {  CloseOutlined, StopOutlined } from '@ant-design/icons';

interface DisableUserModalProps {
  visible: boolean;
  onCancel: () => void;
  onDisable: () => void;
  userName: string;
}

const DisableUserModal: React.FC<DisableUserModalProps> = ({ visible, onCancel, onDisable, userName }) => {
  return (
    <Modal
      title={null}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closeIcon={<CloseOutlined className="text-red-500" />}
      className="rounded-lg custom-modal"
    >
      <div className="bg-[#FFF5EF] flex items-center py-4 px-2 rounded-t-lg">
        <StopOutlined  className="text-orange-500 text-2xl mr-2" />
        <h2 className="font-bold text-lg">USER</h2>
      </div>

      <div className="py-2 text-center">
        <p className="text-gray-600">
          Are you sure you want to disable <span className="font-bold">{userName}</span>?
        </p>
      </div>

      <div className="flex justify-end px-3 pb-6 mr-16">
        <Button
          onClick={onCancel}
          className="bg-gray-100 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md mr-4 w-[144px]"
        >
          Cancel
        </Button>
        <Button
          onClick={onDisable}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md mr-7 w-[144px]"
        >
          Disable
        </Button>
      </div>
    </Modal>
  );
};

export default DisableUserModal;
