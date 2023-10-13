"use client";

import Image from "next/image";
import React, { useState } from "react";

const TopBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="p-10 pb-0">
      <div className="bg-blue-gradient rounded-[20px] p-5 h-full">
        <div className=" text-white flex items-center justify-between">
          <h1 className="px-2 py-3 text-left text-4xl font-bold">Board.</h1>
          <button onClick={() => setOpenMenu(!openMenu)}>
            <Image
              src={"/icons/hamburgerIcon.svg"}
              alt="Hamburger icon"
              width={30}
              height={30}
              className="bg-white rounded-full p-2 w-12 h-10"
            />
          </button>
        </div>
        {openMenu && (
          <nav className="flex flex-col text-white space-y-2 p-4">
            <button
              href="#"
              className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md flex items-center justify-start gap-5"
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
              className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md flex items-center justify-start gap-5"
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
              className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md flex items-center justify-start gap-5"
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
              className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md flex items-center justify-start gap-5"
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
              className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md flex items-center justify-start gap-5"
            >
              <Image
                src={"/icons/setting_icon.png"}
                width={17}
                height={17}
                alt="Settings icon"
              />
              Settings
            </button>
            <div className="flex items-center justify-start">
              <button
                href="#"
                className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md flex items-center justify-start gap-5"
              >
                Contact Us
              </button>
              <button
                href="#"
                className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md flex items-center justify-start gap-5"
              >
                Help
              </button>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default TopBar;