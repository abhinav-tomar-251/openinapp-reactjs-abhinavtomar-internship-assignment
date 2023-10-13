import React from "react";
import Products from "./Products";
import ProfileCard from "./ProfileCard";

const Cards = () => {
  return (
    <section className="mt-5 grid grid-cols-2 max-sm:grid-cols-1 pb-6 gap-10">
      <Products />
      <ProfileCard />
    </section>
  );
};

export default Cards;