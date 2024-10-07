import React from 'react';
import { Modal, Button } from 'antd';
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';

interface DeleteModalProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  bayName: string | null;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ visible, onOk, onCancel, bayName }) => {
  return (
    <Modal
      title={false}
      visible={visible}
      onOk={onOk}
      closeIcon={<CloseOutlined className="text-red-500" />}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel} className="mb-2 mr-2 w-[144px]">
          Cancel
        </Button>,
        <Button key="submit" type="primary" danger onClick={onOk} disabled={!bayName} className="mr-10 w-[144px]">
          Delete
        </Button>,
      ]}
      className="custom-modal"
    >
      <div>
        <div className="flex justify-between items-center bg-[#FEEFE8] p-4 rounded-t-lg border-b border-[#F5C6CB]">
          <div className="flex items-center space-x-2">
            <DeleteOutlined className="text-red-500" />
            <h2 className="font-semibold text-l">DELETE LOADING BAY</h2>
          </div>
        </div>
        <p className="p-4">Are you sure you want to delete <span className='font-semibold'>{bayName || 'this loading bay'}?</span> </p>
      </div>
    </Modal>
  );
};

export default DeleteModal;
