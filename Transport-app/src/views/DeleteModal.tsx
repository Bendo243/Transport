import React from 'react'; 
import { Modal, Button } from 'antd';
import { FaTimes } from 'react-icons/fa';
import { StopOutlined } from '@ant-design/icons';

interface DeleteModalProps {
  isVisible: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isVisible, onClose, onDelete }) => {
  return (
    <Modal
      visible={isVisible}                 
      onCancel={onClose}                  
      footer={null}                       
      centered={true}                 
      closeIcon={<FaTimes className="text-[#FF742C] hover:text-red-700" />} 
      className="custom-modal"
      style={{ width: '400px', height:'184px' }} 
    >
      <div className="flex justify-between items-center bg-[#FEEFE8] p-4 rounded-t-lg border-b border-[#F5C6CB]">
        <div className="flex items-center">
          <span className="text-l font-bold">
            <StopOutlined className='mr-2 text-red-500' />DISABLE VEHICLE
          </span>
        </div>
      </div>
      <div className="p-2">
        <div className='ml-10'>
          <p>Are you sure you want to disable <span className='font-bold'>BUS GOLD ?</span></p>
        </div>
        <div className="flex flex-row-reverse mt-4">
          <Button type="primary" onClick={onDelete} className="w-[120px] bg-red-500 hover:bg-red-600 right-10">
            Disable
          </Button>
          <Button onClick={onClose} className="w-[120px] bg-white border-gray-300 right-14">
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
