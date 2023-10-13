"use client";

import React, { useEffect, useState } from "react";
import BasicOptions from "./BasicOptions";
import ContactOptions from "./ContactOptions";

const ProfileCardModal = ({ setShowModal }) => {
  const [option, setOption] = useState("Basic");

  const [basicInfo, setBasicInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [contactInfo, setContactInfo] = useState({
    insta: "",
    youtube: "",
  });

  console.log(basicInfo);

  useEffect(() => {
    // Check local storage for existing data and populate the state if it exists
    const storedBasicInfo = JSON.parse(localStorage.getItem("basicInfo"));
    const storedContactInfo = JSON.parse(localStorage.getItem("contactInfo"));

    if (storedBasicInfo) {
      setBasicInfo(storedBasicInfo);
    }

    if (storedContactInfo) {
      setContactInfo(storedContactInfo);
    }
  }, []);

  const handleClose = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      basicInfo.name.trim() !== "" &&
      basicInfo.email.trim() !== "" &&
      basicInfo.phone.trim() !== ""
    ) {
      console.log("Submitted");
      localStorage.setItem("basicInfo", JSON.stringify(basicInfo));
      localStorage.setItem("contactInfo", JSON.stringify(contactInfo));
      setShowModal(false);
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto ">
        <div className="flex items-center justify-center flex-col min-h-screen ">
          <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-white rounded-[20px] overflow-hidden p-5 pt-1 shadow-xl relative z-10 flex items-center justify-between flex-col w-[30%] max-sm:w-[90%]">
            <div className="flex items-center w-full justify-between">
              <h1 className="font-semibold text-xl font-sans pl-2">
                Add New Profile
              </h1>
              <button
                className=" right-0 m-3 text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={handleClose}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <hr className=" border-[1px] border-gray-200 w-full p-0" />
            <div className="flex items-center justify-around w-full mt-6 gap-10">
              <div className="w-full flex flex-col items-center justify-center gap-4">
                <button
                  className="text-center"
                  onClick={() => setOption("Basic")}
                >
                  Basic
                </button>
                <hr
                  className={`border-[2px] ${
                    option === "Basic" ? "border-[#3F84F8]" : "border-gray-400"
                  } w-full p-0`}
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-4">
                <button
                  className="text-center"
                  onClick={() => setOption("Contact")}
                >
                  Contact
                </button>
                <hr
                  className={`border-[2px] ${
                    option === "Contact"
                      ? "border-[#3F84F8]"
                      : "border-gray-400"
                  } w-full p-0`}
                />
              </div>
            </div>
            {option === "Basic" && (
              <BasicOptions setBasicInfo={setBasicInfo} basicInfo={basicInfo} />
            )}
            {option === "Contact" && (
              <ContactOptions
                setContactInfo={setContactInfo}
                contactInfo={contactInfo}
              />
            )}
            <div className="flex items-center justify-end w-full">
              {option === "Basic" ? (
                <button
                  onClick={() => setOption("Contact")}
                  className="p-2 bg-[#3F84F8] rounded-lg px-4 text-white font-sans font-semibold tracking-[0.05rem]"
                >
                  Next
                </button>
              ) : (
                <div className="flex items-center justify-end gap-4 w-full">
                  <button
                    onClick={() => setOption("Basic")}
                    className="p-2 border-gray-300 border-[2px] rounded-lg px-4 text-black font-semibold font-sans tracking-[0.05rem]"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="p-2 bg-[#3F84F8] rounded-lg px-4 text-white font-sans font-semibold tracking-[0.05rem]"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCardModal;