"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import SideBar from "@/components/dashboard/SideBar";
import MainDashboard from "@/components/dashboard/MainDashboard";
import TopBar from "@/components/dashboard/TopBar";

const page = () => {
  const session = useSession();
  // console.log(session);
  return (
    <main className="flex min-h-screen max-lg:flex-col mb-6">
      <section className="w-1/4 max-lg:hidden">
        <SideBar />
      </section>
      <section className="max-lg:block hidden">
        <TopBar />
      </section>
      <section className="w-3/4 max-lg:w-full pb-10">
        <MainDashboard />
      </section>
    </main>
  );
};

export default page;