import React from "react";
import Bus from "../assets/Bus.svg";
import BK from "../assets/Book2.svg";
import Searchbar from "./Searchbar";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button, Modal, Input, } from "antd";
import VehicleReg from "./VehicleReg";


interface SummaryItem {
  label: string;
  count: number;
  icon: string;
  Book: string;
}

const Vehiclesummary: React.FC = () => {
  const summaryItems: SummaryItem[] = [
    { Book: BK, label: "TOTAL", count: 10, icon: Bus },
    { Book: BK, label: "AVAILABLE", count: 10, icon: Bus },
    { Book: BK, label: "ASSIGNED", count: 10, icon: Bus },
    { Book: BK, label: "FAULTY", count: 5, icon: Bus },
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
       <div className="ml-4"> <div className="text-2xl font-bold mt-3 py-2  leading-3">Vehicles </div> <p className="text-gray-400  ">30 available bus</p></div>
        <span className="flex items-center">
          <Button type="primary" onClick={showModal} className="mr-3 mt-2">
            Add Vehicle <PlusOutlined className="text-white" />
          </Button>

          <Modal
            title={false}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={
              <div className="flex justify-end space-x-3">
                <Button onClick={handleCancel} className="bottom-2 w-[144px] right-1">
                  Cancel
                </Button>
                <Button type="primary" onClick={handleOk} className="bottom-2 w-[144px]">
                  Submit
                </Button>
              </div>
            }
          >
            <VehicleReg />
          </Modal>
        </span>
      </div>
      <div className="flex space-x-2 mt-2 ml-4 ">
        <Searchbar /> <div>  <Input
      placeholder="Status"
      className="w-[200px] h-[40px] px-4"
      suffix={<DownOutlined className="text-gray-400" />}
    /></div>
      </div>

      <div className="grid grid-cols-4 gap-4 p-4 flex-row ">
        {summaryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md  rounded-lg  flex items-center justify-between hover:cursor-pointer overflow-hidden"
          >
            <div className="flex p-4">
              <div className="bg-[#BA41321A] w-12 rounded">
                {" "}
                <img
                  src={item.Book}
                  alt={`${item.label} icon`}
                  className="h-10 w-12 mt-2  p-y-1 "
                />{" "}
              </div>
              <div className="ml-2">
                <h3 className="text-lg font-semibold text-gray-400">
                  {item.label}
                </h3>
                <p className="text-2xl font-bold">{item.count}</p>
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
