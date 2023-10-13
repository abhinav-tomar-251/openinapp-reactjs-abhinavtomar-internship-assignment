import Image from "next/image";
import React from "react";

const LeftSide = () => {
  return (
    <section className="p-10 w-full h-full flex flex-col justify-between max-sm:gap-10">
      <h1 className="text-2xl max-sm:text-lg text-white font-bold cursor-pointer">LOGO</h1>
      <h1 className="mr-12 max-sm:mr-0 text-5xl max-sm:text-5xl max-md:text-3xl text-center text-white font-bold ">
        Board.
      </h1>
      <div className=" flex items-center cursor-pointer justify-center gap-5 mr-20 max-sm:mr-0">
        <Image
          src={"/icons/githubIcon.svg"}
          alt="github Icon"
          width={34}
          height={34}
        />
        <Image
          src={"/icons/twitterIcon.svg"}
          alt="twitter Icon"
          width={34}
          height={34}
        />
        <Image
          src={"/icons/linkedinIcon.svg"}
          alt="linkedin Icon"
          width={34}
          height={34}
        />
        <Image
          src={"/icons/discordIcon.svg"}
          alt="discord Icon"
          width={34}
          height={34}
        />
      </div>
    </section>
  );
};

export default LeftSide;