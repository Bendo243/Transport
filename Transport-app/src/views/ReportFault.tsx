import React from 'react';
import { Modal, Button, Input, Upload, } from 'antd';
import{ExclamationCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { FaTimes } from 'react-icons/fa';






interface ReportFaultModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const ReportFaultModal: React.FC<ReportFaultModalProps> = ({ isVisible, onClose, onSubmit }) => {
  return (
    <Modal
      visible={isVisible}          
      onCancel={onClose}           
      footer={null}                
      closable={true}              
      centered={true}
      className="custom-modal !w-[400px]"
      closeIcon={<FaTimes className='text-[#FF742C] h-[20px]'/>}
    >
      
      <div className="flex justify-between items-center bg-[#FFF5EF] p-4 rounded-t-lg">
        <div className="flex items-center">
          <span className="text-red-500 text-lg font-bold h-">< ExclamationCircleOutlined /></span>
          <h2 className="ml-2 font-semibold text-base">REPORT FAULT</h2>
        </div>
        <Button
          type="text"
          onClick={onClose}          
          className="text-gray-400 hover:text-gray-600"
        >
          
        </Button>
      </div>

      
      <div className='p-4'>
        
        <div className="mb-4">
          <label htmlFor="comment" className="font-medium text-sm mb-1 block">
            Comment
          </label>
          <Input.TextArea
            id="comment"
            rows={3}
            className="resize-none rounded-md"
            placeholder="Enter your comment here..."
          />
        </div>

        
        <div className="mb-6">
          <label htmlFor="upload" className="font-medium text-sm mb-1 block">
            Upload Snapshot/Attachment
          </label>
          <div className="flex space-x-3">
            <Input id="upload" disabled placeholder="No file chosen" className="w-full" />
            <Upload>
              <Button icon={<UploadOutlined />} className='font-semibold'>Browse</Button>
            </Upload>
          </div>
        </div>

    
        <div className="flex flex-row-reverse  mt-4">
        
          <Button type="primary" onClick={onSubmit} className="w-[120px] bg-orange-500 hover:bg-orange-600 ml-2">
            Report
          </Button>
          <Button onClick={onClose} className="w-[120px] bg-white border-gray-300 text-gray-500">
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ReportFaultModal;
