import Image from "next/image";
import React from "react";

const Card = ({ title, revenue, icon, status }) => {
  return (
    <div className="bg-white border-[3px] shadow-lg w-full border-[#E0E0E0] rounded-[20px]">
      <div className="flex flex-col p-6 pt-4 pb-4">
        <Image src={icon} alt="icon" width={40} height={40} />
        <p className="font-lato mt-2 text-sm">{title}</p>
        <div className="flex items-center justify-between -mt-1 gap-1">
          <h2 className="text-2xl font-bold font-sans">{revenue}</h2>
          <p className="p-2 bg-[#E9F9EB] rounded-[30px] text-xs font-sans font-bold text-[#4AD15F]">
            {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;