import React from 'react';
import { Modal, Button } from 'antd';
import { CloseOutlined, StopOutlined } from '@ant-design/icons';

interface DisableModalProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  bayName: string | null;
}

const DisableModal: React.FC<DisableModalProps> = ({ visible, onOk, onCancel, bayName }) => {
  const displayName = bayName;

  return (
    <Modal
      title={false}
      visible={visible}
      onCancel={onCancel}
      closeIcon={<CloseOutlined className="text-red-500" />}
      footer={[
        <Button key="back" onClick={onCancel} className="bg-gray-100 text-gray-700 hover:bg-gray-200 mb-2 mr-2 w-[144px]">
          Cancel
        </Button>,
        <Button key="submit" onClick={onOk} className="bg-[#FF742C] mr-5 w-[144px] text-white">
          Disable
        </Button>,
      ]}
      className="rounded-lg custom-modal"
      style={{ width: '400px', height: '184px' }} // Custom size for the modal
    >
      <div>
        <div className="flex justify-between items-center bg-[#FEEFE8] p-4 rounded-t-lg border-b border-[#F5C6CB]">
          <div className="flex items-center space-x-2">
            <StopOutlined className="text-[#FF742C]" style={{ fontSize: '20px' }} />
            <h2 className="font-semibold">DISABLE LOADING BAY</h2>
          </div>
        </div>
        <p className="text-gray-600 text-l py-3 px-6">
          Are you sure you want to disable <strong>{displayName}</strong>?
        </p>
      </div>
    </Modal>
  );
};

export default DisableModal;
