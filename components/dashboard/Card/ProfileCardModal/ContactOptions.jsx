import React from "react";

const ContactOptions = ({ setContactInfo, contactInfo }) => {
  return (
    <div className="mt-6 mb-4 w-full flex flex-col items-start justify-center">
      <form
        className="flex flex-col w-full items-start justify-center gap-5"
        action="#"
      >
        <div className="flex flex-col items-start justify-center w-full">
          <label htmlFor="insta" className="font-montserrat mb-1">
            Instagram Link (Optional)
          </label>
          <input
            type="url"
            id="insta"
            value={contactInfo.insta}
            onChange={(e) =>
              setContactInfo((prevState) => ({
                ...prevState,
                insta: e.target.value,
              }))
            }
            placeholder="Eg. instagram.com/username"
            className="w-full p-3 rounded-md border-[1px] focus:border-gray-400 ring-0 focus:outline-none"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <label htmlFor="youtube" className="font-montserrat mb-1">
            Youtube Link (Optional)
          </label>
          <input
            type="url"
            id="youtube"
            value={contactInfo.youtube}
            onChange={(e) =>
              setContactInfo((prevState) => ({
                ...prevState,
                youtube: e.target.value,
              }))
            }
            placeholder="Eg. youtube.com/username"
            required
            className="w-full p-3 rounded-md border-[1px] focus:border-gray-400 ring-0 focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactOptions;