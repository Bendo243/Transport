import React from 'react';
import { Modal, Input, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';


interface LoadingBayModalProps {
  visible: boolean;
  onClose: () => void;
  loadingBay: string;
  setLoadingBay:(value:string) => void;
  address:string;
  setAddress:(value:string)=> void;
  onProceed:()=>void;
  loadingBayError:string;
  addressError:string;
}

const LoadingBayModal: React.FC<LoadingBayModalProps> = ({ visible, onClose,loadingBay,setLoadingBay,address, setAddress, onProceed }) => {


  

  return (
    <Modal
      title={false}
      open={visible}
      onCancel={onClose}
      footer={null}
      className='custom-modal'
      closeIcon={<CloseOutlined className="text-red-500" />}
    >
        
        <div className="flex justify-between items-center bg-[#FEEFE8] p-4 rounded-t-lg border-b border-[#F5C6CB]">
        <div className="flex items-center">
      
          <h2 className=" font-semibold text-l"> NEW LOADING BAY</h2>
        </div>
        </div>
      <div className="py-2 px-3">
        
        <div className="mb-2">
          <label className="block text-sm  text-gray-700 mb-1">Loading Bay</label>
          <Input
            value={loadingBay}
            onChange={(e) => setLoadingBay(e.target.value)}
            placeholder="Enter loading bay"
            className="w-full border  border-gray-300 rounded-md p-2 h-[35px]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm  text-gray-700 ">Address</label>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address"
            className="w-full h-[35px] border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="flex justify-end space-x-2 mt-3 mb-1">
          <Button onClick={onClose} className='w-[144px] text-gray-400'>Cancel</Button>
          <Button type="primary" onClick={onProceed} className='w-[144px]'>Proceed</Button>
        </div>
      </div>
    </Modal>
  );
};

export default LoadingBayModal;
