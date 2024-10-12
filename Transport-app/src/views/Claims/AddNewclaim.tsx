// import React, { useState } from 'react';
// import { Modal, Button, Select, DatePicker } from 'antd';


// const { Option } = Select;

// interface NewClaimModalProps {
  
//   onNext: () => void;
// }

// const NewClaimModal: React.FC<NewClaimModalProps> = ({ onNext}) => {
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [selectedTripId, setSelectedTripId] = useState<string | undefined>(undefined);
  
//     // const showModal = () => {
//     //     setIsModalVisible(true);
//     //   };
    
//       const handleCancel = () => {
//         setIsModalVisible(false);
//       };
    
//       const handleNext = () => {
//         console.log('Proceeding to the next step...');
//         onNext();  // Call the passed onNext handler to close modal and open ReportIncident
//       };
    
//       const handleTripIdChange = (value: string) => {
//         setSelectedTripId(value);
//       };  return (
//     <Modal
//       title={false}
//       visible={isModalVisible}
//       onCancel={handleCancel}
//       footer={[
//         <Button key="cancel" onClick={handleCancel} className="bg-gray-100 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md mr-4 w-[130px] bottom-2">
//           Cancel
//         </Button>,
//         <Button key="next" type="primary" onClick={handleNext} className="bg-orange-500 hover:bg-orange-600 text-white rounded-md  w-[130px] bottom-2 mr-4">
//           Next
//         </Button>,
//       ]}
//       closeIcon={<span className="text-orange-500">X</span>}  // Custom close icon color
//       width={400}
//       className="rounded-lg custom-modal"
//     >
//         <div className="bg-[#FFF5EF] flex items-center py-4 px-2 rounded-t-lg space-x-2 border-b border-[#F5C6CB]">
           
//           <h2 className="text- font-bold">NEW CLAIM</h2>
//        </div>
//       <div className="space-y-4 p-4">
//         {/* Trip Id Select */}
//         <div>
//           <label className="block font-semibold mb-1 text-gray-400">Trip Id</label>
//           <Select
//             placeholder="Select Trip Id"
//             value={selectedTripId}
//             onChange={handleTripIdChange}
//             className="w-full"
//           >
//             <Option value="Trp-2024-001">Trp-2024-001</Option>
//             <Option value="Trp-2024-002">Trp-2024-002</Option>
//           </Select>
//         </div>

//         {/* Date/Time Picker */}
//         <div>
//           <label className="block font-semibold mb-1 text-gray-400">Date/Time</label>
//           <DatePicker showTime className="w-full" />
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default NewClaimModal;


import React, { useState } from 'react';
import { Button, Select, DatePicker } from 'antd';

const { Option } = Select;

interface NewClaimModalProps {
  onNext: () => void;
  onCancel:()=>void;
}

const NewClaimModal: React.FC<NewClaimModalProps> = ({ onNext, onCancel }) => {
  const [selectedTripId, setSelectedTripId] = useState<string | undefined>(undefined);

  const handleNext = () => {
    console.log('Proceeding to the next step...');
    onNext();  // Trigger modal transition
  };
const handleCancel=()=>{
  onCancel();
}
  

  return (
    <div>
      <div className="bg-[#FFF5EF] flex items-center py-4 px-2 rounded-t-lg space-x-2 border-b border-[#F5C6CB]">
         <h2 className="text- font-bold">NEW CLAIM</h2>
                  </div>
      <div className="space-y-4 p-4">
        {/* Trip Id Select */}
        <div>
          <label className="block font-semibold mb-1 text-gray-400">Trip Id</label>
          <Select placeholder="Select Trip Id" value={selectedTripId} onChange={(value) => setSelectedTripId(value)} className="w-full">
            <Option value="Trp-2024-001">Trp-2024-001</Option>
            <Option value="Trp-2024-002">Trp-2024-002</Option>
          </Select>
        </div>

        {/* Date/Time Picker */}
        <div>
          <label className="block font-semibold mb-1 text-gray-400">Date/Time</label>
          <DatePicker showTime className="w-full" />
        </div>

        <div className="flex justify-end">
        <Button key="cancel" onClick={handleCancel} className="bg-gray-100 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md mr-4 w-[130px] bottom-2">
      Cancel        </Button>
          <Button onClick={handleNext} type="primary"  className="bg-orange-500 hover:bg-orange-600 text-white rounded-md  w-[130px] bottom-2 ">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewClaimModal;
