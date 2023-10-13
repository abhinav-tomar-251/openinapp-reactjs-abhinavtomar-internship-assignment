"use client";

import Image from "next/image";
import React, { useState } from "react";
import ProfileCardModal from "./ProfileCardModal/ProfileCardModal";

const ProfileCard = () => {
  const [showModal, setShowModal] = useState(false);

  let storedBasicInfo = null;
  let storedContactInfo = null;

  if (typeof window !== "undefined") {
    storedBasicInfo = JSON.parse(localStorage.getItem("basicInfo"));
    storedContactInfo = JSON.parse(localStorage.getItem("contactInfo"));
  }
  return (
    <div
      className={`bg-white border-[3px] w-full ${
        storedBasicInfo ? "" : "flex items-center justify-center"
      } p-5 rounded-[20px] shadow-lg border-[#E0E0E0]`}
    >
      {(!storedBasicInfo || !storedContactInfo) && (
        <div className="flex flex-col items-center gap-4 justify-center">
          <button onClick={() => setShowModal(true)}>
            <Image
              src="/icons/addProfileIcon.png"
              width={85}
              height={85}
              alt="Add profile icon"
            />
          </button>
          <p className="font-montserrat font-bold text-xl text-[#858585]">
            Add Profile
          </p>
        </div>
      )}
      {showModal && <ProfileCardModal setShowModal={setShowModal} />}

      {(storedBasicInfo || storedContactInfo) && (
        <div className="flex flex-col items-start justify-between h-full w-full">
          <div className="w-full mt-7 mb-6 flex items-center justify-between">
            <h1 className="text-left w-full text-3xl font-bold font-sans">
              {storedBasicInfo.name}
            </h1>
            <button onClick={() => setShowModal(true)}>
              <Image
                src="/icons/addProfileIcon.png"
                width={45}
                height={45}
                alt="Edit icon"
              />
            </button>
          </div>
          <div className=" mb-10 flex items-center max-lg:flex-col gap-3 max-md:flex-col justify-end w-full">
            <div className="flex flex-col items-center justify-start w-full gap-3">
              <div className="flex items-center justify-start w-full gap-5">
                <Image
                  src={"/icons/phoneIcon.png"}
                  width={50}
                  height={50}
                  alt="phone icon"
                />
                <p className="text-sm w-full break-all">
                  {storedBasicInfo.phone}
                </p>
              </div>
              <div className="flex items-center justify-start w-full gap-5">
                <Image
                  src={"/icons/mailIcon.png"}
                  width={50}
                  height={50}
                  alt="mail icon"
                />
                <p className="text-sm w-full break-all">
                  {storedBasicInfo.email}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full gap-3">
              <div className="flex items-center justify-normal w-full gap-5">
                <Image
                  src={"/icons/instaIcon.png"}
                  width={50}
                  height={50}
                  alt="insta icon"
                />
                <p className="text-sm w-full break-all">
                  {storedContactInfo.insta}
                </p>
              </div>
              <div className="flex items-center justify-normal w-full gap-5">
                <Image
                  src={"/icons/youtubeIcon.png"}
                  width={50}
                  height={50}
                  alt="youtube icon"
                />
                <p className="text-sm w-full break-all">
                  {storedContactInfo.youtube}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;