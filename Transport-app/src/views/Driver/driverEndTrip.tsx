import { Modal, Button } from 'antd';
import { CloseOutlined,StopOutlined } from '@ant-design/icons';
import arrow from '../../assets/arrow both.png' 

interface EndTripModalprops{
  visible:boolean;
  onOk:()=>void;
  onCancel:()=>void;
 }
const EndTripModal: React.FC<EndTripModalprops> = ({visible,onOk, onCancel}) => {



  return (
    <>
      
      <Modal
        title={false

        }
        className='custom-modal'
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        footer={[
          <Button key="cancel" onClick={onCancel} className="bg-gray-100 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md mr-4 w-[144px] bottom-6">
            Cancel
          </Button>,
          <Button key="end" type="primary" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md mr-7 w-[144px] bottom-6" onClick={onOk}>
            End
          </Button>,
        ]}
        closeIcon={<CloseOutlined className="text-red-500" />}
      >

 <div className="bg-[#FFF5EF] flex items-center py-4 px-2 rounded-t-lg space-x-2 border-b border-[#F5C6CB]">
           <StopOutlined  className="text-orange-500 text-xl" />
          <h2 className="text-lg font-semibold">END TRIP</h2>
       </div>
        <div className="p-4">
          <p className="text-gray-500 mb-4">Are you sure you want to end trip?</p>
          
          {/* Route and Date details */}
          <div className="space-y-2">
            <div className="flex">
              <span className="font-semibold text-black">Route:</span>
              <div className="ml-2 flex items-center space-x-1">
                <span className="text-gray-500 font-semibold">Jubi</span>
                <img src={arrow} alt="Arrow" className="w-4 h-4" />
                <span className="text-gray-500 font-semibold">Abuja</span>
              </div>
            </div>
            <div className="flex">
              <span className="font-semibold text-black">Date:</span>
              <span className="ml-2 text-gray-500 font-semibold">13/09/2024</span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EndTripModal;
