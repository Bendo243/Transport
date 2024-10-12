import React, { useState } from "react";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { FaTimes } from "react-icons/fa";
import SearchClaim from "./SearchClaim";
import SelectDtae from "./selectDate";
import SelectVehicle from "./selectVehicle";
import SelectStatus from "./selectStatus";
import NewClaimModal from "./AddNewclaim";
import ReportIncidentClaim from "./ReportIncident";
import Bus from "../../assets/Bus.svg";
import Total from "../../assets/booked.svg";
import Available from "../../assets/Available.svg";
import Assigned from "../../assets/pending.svg";
import Faulty from "../../assets/rejected.svg";

interface SummaryItem {
  label: string;
  count: number;
  icon: string;
  Book: string;
}

const Claimsummary: React.FC = () => {
  const summaryItems: SummaryItem[] = [
    { Book: Total, label: "TOTAL", count: 10, icon: Bus },
    { Book: Available, label: "SETTLED", count: 10, icon: Bus },
    { Book: Assigned, label: "PENDING", count: 10, icon: Bus },
    { Book: Faulty, label: "REJECTED", count: 5, icon: Bus },
  ];

  const [isNewClaimModalopen, setIsNewClaimModalopen] = useState(false);
  const [isReportIncidentModalopen, setIsReportIncidentModalopen] = useState(false);

  const showNewClaimModal = () => {
    setIsNewClaimModalopen(true);
  };

  const hideNewClaimModal = () => {
    setIsNewClaimModalopen(false);
  };

  const showReportIncidentModal = () => {
    setIsReportIncidentModalopen(true);
  };

  const hideReportIncidentModal = () => {
    setIsReportIncidentModalopen(false);
  };

  const handleNextInNewClaim = () => {
    hideNewClaimModal(); // Close NewClaimModal
    showReportIncidentModal(); // Open ReportIncidentModal
  };

  return (
    <div>
      <div className="flex justify-between mb-1">
        <div>
          <div className="text-2xl font-bold">Claims</div>
          <div>
            <p className="text-gray-500 text-sm">You have a total of 20 Claims</p>
          </div>
        </div>
        <span className="flex items-center">
          <Button className="flex items-center border-gray-400 text-gray-600 mr-2 h-[36px]" style={{ borderColor: "#D3D3D3" }}>
            Generate Report <UploadOutlined />
          </Button>
          <Button type="primary" onClick={showNewClaimModal}>
            New Claim <PlusOutlined className="text-white" />
          </Button>
        </span>
      </div>

      {/* New Claim Modal */}
      <Modal
      title={false}
        closeIcon={<FaTimes className="text-[#FF742C] hover:text-red-700" />}
        centered
        open={isNewClaimModalopen}
        onCancel={hideNewClaimModal}
        footer={null}
        className="custom-modal"
      >
        <NewClaimModal onNext={handleNextInNewClaim} onCancel={hideNewClaimModal} />
      </Modal>

      {/* Report Incident Modal */}
      <Modal
        closeIcon={<FaTimes className="text-[#FF742C] hover:text-red-700" />}
        centered
        open={isReportIncidentModalopen}
        onCancel={hideReportIncidentModal}
        footer={null}
        className="custom-modal"
      >
        <ReportIncidentClaim onOk={hideReportIncidentModal} onCancel={hideReportIncidentModal}  />
      </Modal>

      {/* Other components */}
      <div className="flex space-x-12">
        <SearchClaim />
        <SelectStatus />
        <SelectVehicle />
        <SelectDtae />
      </div>

      <div className="grid grid-cols-4 gap-4 py-2 flex-row ">
        {summaryItems.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg flex items-center justify-between hover:cursor-pointer overflow-hidden">
            <div className="flex p-4">
              <div className="w-12 rounded">
                <img src={item.Book} alt={`${item.label} icon`} className="h-12 w-12 mt-1 py-1" />
              </div>
              <div className="ml-1">
                <h3 className="w-[57px] h-[14px] font-semibold text-gray-400 mb-2">{item.label}</h3>
                <p className="text-xl font-bold w-[21px] h-[15px] mt-2">{item.count}</p>
              </div>
            </div>
            <div className="bg-cover h-full  relative">
              <div className="h-[250px] w-20 bg-[#BA41321A] absolute right-0 top-0 z-0 rotate-[34deg]"></div>
              <img src={item.icon} alt={`${item.label} icon`} className="h-19 w-17 mt-5 mr-2 relative" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Claimsummary;
