import Image from "next/image";
import React from "react";

const SideBar = () => {
  return (
    <div className="h-screen p-10 max-md:p-2 fixed top-2">
      <aside className=" bottom-20 bg-blue-gradient rounded-[20px] p-5 text-white h-full flex flex-col">
        <div className="pt-10 px-8 pb-5 text-left text-4xl font-bold">
          Board.
        </div>
        <nav className="flex flex-col space-y-2 p-4">
          <button
            href="#"
            className="hover:bg-gray-700 px-4 py-2 rounded-md flex items-center justify-start gap-5"
          >
            <Image
              src={"/icons/dashboard_icon.png"}
              width={17}
              height={17}
              alt="Dashboard icon"
            />
            Dashboard
          </button>
          <button
            href="#"
            className="hover:bg-gray-700 px-4 py-2 rounded-md flex items-center justify-start gap-5"
          >
            <Image
              src={"/icons/transaction_icon.png"}
              width={17}
              height={17}
              alt="Transaction icon"
            />
            Transactions
          </button>
          <button
            href="#"
            className="hover:bg-gray-700 px-4 py-2 rounded-md flex items-center justify-start gap-5"
          >
            <Image
              src={"/icons/schedule_icon.png"}
              width={17}
              height={17}
              alt="Schedule icon"
            />
            Schedules
          </button>
          <button
            href="#"
            className="hover:bg-gray-700 px-4 py-2 rounded-md flex items-center justify-start gap-5"
          >
            <Image
              src={"/icons/user_icon.png"}
              width={17}
              height={17}
              alt="Users icon"
            />
            Users
          </button>
          <button
            href="#"
            className="hover:bg-gray-700 px-4 py-2 rounded-md flex items-center justify-start gap-5"
          >
            <Image
              src={"/icons/setting_icon.png"}
              width={17}
              height={17}
              alt="Settings icon"
            />
            Settings
          </button>
        </nav>
        <div className="p-4 flex flex-col justify-end h-screen">
          <div className="text-left mb-2">Contact Us</div>
          <div className="text-left">Help</div>
        </div>
      </aside>
      <div className="flex-1"></div>
    </div>
  );
};

export default SideBar;