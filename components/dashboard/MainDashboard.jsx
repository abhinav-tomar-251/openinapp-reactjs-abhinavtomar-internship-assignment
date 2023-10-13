import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";
import NavDash from "./NavDash";
import StatusCards from "./StatusCard/StatusCard";
import BarChartCard from "./BarChart/BarChartCard";
import Cards from "./Card/Cards";

const MainDashboard = () => {
  const session = useSession();

  let profileImage =
    session.status === "authenticated"
      ? session.data.user.image
      : "/icons/avatarIcon.png";

  let profileEmail =
    session.status === "authenticated" ? session.data.user.email : "Loading...";

  return (
    <section className="p-10 h-screen">
      <NavDash profileImage={profileImage} email={profileEmail} />
      <StatusCards />
      <BarChartCard />
      <Cards />
    </section>
  );
};

export default MainDashboard;