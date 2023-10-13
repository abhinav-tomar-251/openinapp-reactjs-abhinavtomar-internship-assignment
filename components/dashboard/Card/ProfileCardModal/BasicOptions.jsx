import React from "react";

const BasicOptions = ({ setBasicInfo, basicInfo }) => {
  console.log(localStorage.getItem("basicInfo"));

  return (
    <div className="mt-6 mb-4 w-full flex flex-col items-start justify-center">
      <form
        className="flex flex-col w-full items-start justify-center gap-5"
        action="#"
      >
        <div className="flex flex-col items-start justify-center w-full">
          <label htmlFor="name" className="font-montserrat mb-1">
            Enter Name*
          </label>
          <input
            type="text"
            id="name"
            value={basicInfo.name}
            onChange={(e) =>
              setBasicInfo((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
            placeholder="Eg. John Doe"
            required
            className="w-full p-3 rounded-md border-[1px] focus:border-gray-400 ring-0 focus:outline-none"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <label htmlFor="email" className="font-montserrat mb-1">
            Enter Email*
          </label>
          <input
            type="email"
            id="email"
            value={basicInfo.email}
            onChange={(e) =>
              setBasicInfo((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
            placeholder="Eg. John@xyz.com"
            required
            className="w-full p-3 rounded-md border-[1px] focus:border-gray-400 ring-0 focus:outline-none"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <label htmlFor="phone" className="font-montserrat mb-1">
            Enter Phone*
          </label>
          <input
            type="number"
            id="phone"
            value={basicInfo.phone}
            onChange={(e) =>
              setBasicInfo((prevState) => ({
                ...prevState,
                phone: e.target.value,
              }))
            }
            placeholder="Eg. 9123456789"
            required
            className="w-full p-3 rounded-md border-[1px] focus:border-gray-400 ring-0 focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default BasicOptions;