import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

interface EditModalProps {
  visible: boolean;
  onClose: () => void;
  onProceed: (editedBay: { name: string; address: string }) => void;
  bayName: string;
  bayAddress: string;
}

const EditModal: React.FC<EditModalProps> = ({ visible, onClose, onProceed, bayName, bayAddress }) => {
  const [editedName, setEditedName] = useState(bayName);
  const [editedAddress, setEditedAddress] = useState(bayAddress);

  const handleProceed = () => {
    onProceed({ name: editedName, address: editedAddress });
  };

  return (
    <Modal
      title={false}
      open={visible}
      onCancel={onClose}
      footer={null}
      className="custom-modal"
      closeIcon={<CloseOutlined className="text-red-500" />}
    >
      <div className="flex justify-between items-center bg-[#FEEFE8] p-4 rounded-t-lg border-b border-[#F5C6CB]">
        <div className="flex items-center">
          <h2 className="font-semibold text-l">Edit Loading Bay</h2>
        </div>
      </div>

      <div className="py-2 px-3">
        <div className="mb-2">
          <label className="block text-sm text-gray-700 mb-1">Loading Bay</label>
          <Input
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 h-[35px]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-700">Address</label>
          <Input
            value={editedAddress}
            onChange={(e) => setEditedAddress(e.target.value)}
            className="w-full h-[35px] border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="flex justify-end space-x-2 mt-3 mb-1">
          <Button onClick={onClose} className="w-[144px] text-gray-400">
            Cancel
          </Button>
          <Button type="primary" className="w-[144px]" onClick={handleProceed}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
