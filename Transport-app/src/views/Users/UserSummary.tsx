import React from "react";
import Bus from '../../assets/Bus.svg';
import Total from "../../assets/Total.svg"
import Available from "../../assets/Available.svg"
import Assigned from "../../assets/active.svg"


interface UserSummaryProps{
  total:number;
  active:number;
  inactive:number;
}



interface SummaryItem {
  label: string;
  count: number;
  icon: string;
  Book: string;
}

const Usersummary: React.FC<UserSummaryProps> = ({total, active, inactive}) => {
  const summaryItems: SummaryItem[] = [
    { Book: Total, label: "TOTAL", count: total, icon: Bus },
    { Book: Available, label: "ACTIVE", count:active, icon: Bus },
    { Book: Assigned, label: "INACTIVE", count:inactive, icon: Bus },
    
  ];

  

  return (
    <div>
      


      <div className="grid grid-cols-3 gap-4 py-2 flex-row ">
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
              <div className="h-[250px] w-20 bg-[#BA41321A] absolute right-0 top-0 z-0 rotate-[34deg]"></div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usersummary;
