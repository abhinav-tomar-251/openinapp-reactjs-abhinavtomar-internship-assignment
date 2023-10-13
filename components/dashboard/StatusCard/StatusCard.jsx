import React from "react";
import Card from "./Card";

const DUMMY_DATA = [
  {
    title: "Total Revenues",
    revenue: "$2,129,430",
    status: "+2.5%",
    icon: "/icons/totalRevenueIcon.png",
  },
  {
    title: "Total Transactions",
    revenue: "1,520",
    status: "+1.7%",
    icon: "/icons/totalTransactionIcon.png",
  },
  {
    title: "Total Likes",
    revenue: "9,721",
    status: "+1.4%",
    icon: "/icons/totalLikeIcon.png",
  },
  {
    title: "Total Users",
    revenue: "9,721",
    status: "+4.2%",
    icon: "/icons/totalUserIcon.png",
  },
];

const StatusCards = () => {
  return (
    <section className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-6">
      {DUMMY_DATA.map((data) => (
        <Card key={data.title} {...data} />
      ))}
    </section>
  );
};

export default StatusCards;