import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Form = () => {
  const styles = {
    background: "linear-gradient(180deg, #4285F4 0%, #286DE0 100%)",
  };
  return (<section className="p-10 w-[80%] lg:w-[70%] max-md:w-full max-sm:w-full m-auto h-full flex flex-col items-center justify-center">
  <div className="w-full">
    <h1 className="text-left text-4xl text-black font-montserrat leading-normal font-bold">
      Sign In
    </h1>
  </div>
  <div className="w-full">
    <p className="text-left text-sm font-lato">Sign in to your account</p>
  </div>
  <div className="mt-6 w-full flex max-sm:flex-col items-center justify-between gap-10 max-sm:gap-5">
    <button
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      className="flex items-center justify-center w-full hover:bg-gray-200 bg-gray-100 rounded-[10px] p-2.5 pl-5 pr-5 gap-5"
    >
      <Image
        alt="google icon"
        src={"/icons/googleIcon.png"}
        width={15}
        height={15}
      />
      <p className="text-sm font-montserrat text-[#858585]">
        Sign in with Google
      </p>
    </button>
    <button
      onClick={() => signIn("google", {callbackUrl: "/dashboard"})}
      className="flex items-center justify-center w-full hover:bg-gray-200 bg-gray-100 rounded-[10px] p-2.5 pl-5 pr-5 gap-5"
    >
      <Image
        alt="apple icon"
        src={"/icons/appleIcon.png"}
        width={15}
        height={15}
      />
      <p className="text-sm font-montserrat text-[#858585]">
        Sign in with Apple
      </p>
    </button>
  </div>
  <div className="p-7 mt-6 flex flex-col w-full bg-white border-[1px] rounded-[10px] ring-0 gap-4">
    <div className="flex flex-col w-full">
      <label htmlFor="email">Email address</label>
      <input
        type="text"
        name="email"
        id="email"
        className="mt-2 bg-[#EAEAEA] p-1.5 rounded-lg pl-3"
      />
    </div>
    <div className="flex flex-col w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-2 bg-[#EAEAEA] p-1.5 rounded-lg pl-3 border-0 ring-0 active:ring-0 focus:border-0 focus:ring-0"
          />
    </div>
    <div>
      <Link href="/" className="text-[#346BD4]">
        Forgot password?
      </Link>
    </div>
    <button className="bg-[#4285F4] rounded-[10px] p-2.5 text-white font-montserrat font-bold">
      Sign In
    </button>
  </div>

  <div className="mt-6 cursor-pointer">
    <p>
      Don't have an account?{" "}
      <span className="text-[#346BD4] cursor-pointer">Register here</span>
    </p>
  </div>
</section>
);
};

export default Form;