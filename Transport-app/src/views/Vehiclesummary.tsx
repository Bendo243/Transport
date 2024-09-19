import React from "react";
import Bus from "../assets/Bus.svg";
import Searchbar from "./Searchbar";
import {  PlusOutlined, UploadOutlined, } from "@ant-design/icons";
import { useState } from "react";
import { Button, Modal,  } from "antd";
import VehicleReg from "./VehicleReg";
import Total from "../assets/Total.svg"
import Available from "../assets/Available.svg"
import Assigned from "../assets/Assigned.svg"
import Faulty from "../assets/Faulty.svg"
import SelectBar from "./SelectBar";



interface SummaryItem {
  label: string;
  count: number;
  icon: string;
  Book: string;
}

const Vehiclesummary: React.FC = () => {
  const summaryItems: SummaryItem[] = [
    { Book: Total, label: "TOTAL", count: 10, icon: Bus },
    { Book: Available, label: "AVAILABLE", count: 10, icon: Bus },
    { Book: Assigned, label: "ASSIGNED", count: 10, icon: Bus },
    { Book: Faulty, label: "FAULTY", count: 5, icon: Bus },
  ];

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

  return (
    <div className="">
      <div className="flex justify-between ">
       <div className="ml-4"> <div className="text-2xl font-bold py-2  leading-3">Vehicles </div></div>
        <span className="flex items-center">
       
         <div>
          <Button
          className="flex items-center border-gray-400 text-gray-600 mt-2 mr-2  h-[36px]" style={{
         borderRadius:"6px",
         borderColor:"#D3D3D3",
         }}
         >
         Generate Report <UploadOutlined/>
         </Button> 
        
         </div>
          <Button type="primary" onClick={showModal} className="mr-3 mt-2">
            New Vehicle <PlusOutlined className="text-white" />
          </Button>

          <Modal
            // closeIcon={false}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={
              <div className="flex justify-end space-x-3">
                <Button onClick={handleCancel} className="bottom-6 w-[144px] right-3">
                  Cancel
                </Button>
                <Button type="primary" onClick={handleOk} className="bottom-6 w-[144px] right-4">
                  Submit
                </Button>
              </div>
            }
            className="custom-modal"
          
          >
            <div className="modal-header bg-[#FF742C1A] w-full h-[56px] flex items-center justify-start">
              <h2 className="text-black font-semibold ml-1 pl-2">NEW VEHICLE</h2></div>
          <div className="custom-modal-body px-4"> <VehicleReg /> </div>
          </Modal>
        </span>
      </div>
      <div className="flex space-x-2 mt-2 ml-4 ">
        <Searchbar /> <div>  
       <SelectBar/>
      </div>
      </div>

      <div className="grid grid-cols-4 gap-4 p-4 flex-row ">
        {summaryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md  rounded-lg  flex items-center justify-between hover:cursor-pointer overflow-hidden"
          >
            <div className="flex p-4">
              <div className=" w-12 rounded">
                {" "}
                <img
                  src={item.Book}
                  alt={`${item.label} icon`}
                  className="h-12 w-12 mt-1  p-y-1 "
                />{" "}
              </div>
              <div className="ml-1 ">
                <h3 className=" w-[57px] h-[14px] font-semibold text-gray-400 mb-2">
                  {item.label}
                </h3>
                <p className="text-xl font-bold w-[21px] h-[15px] mt-2">{item.count}</p>
              </div>
            </div>
            <div className="  bg-cover  h-full p-x-4 relative">
              <div className="h-[250px] w-20 bg-[#BA41321A] absolute right-0 top-0 z-0 rotate-[30deg]"></div>
              <img
                src={item.icon}
                alt={`${item.label} icon`}
                className="h-19  w-17 mt-5 mr-2 relative "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehiclesummary;
