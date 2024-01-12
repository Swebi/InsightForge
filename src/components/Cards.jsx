import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full px-4 py-[10rem] bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card imagePath={Single} user={"Single User"} price={"149"}  storage={"500 GB"} granted={"1 User"} send="2"></Card>
        <Card imagePath={Double} user={"Partnership"} price={"199"}  storage={"1 TB"} granted={"3 Users"} send="10"></Card>
        <Card imagePath={Triple} user={"Group Account"} price={"299"}  storage={"5 TB"} granted={"5 Users"} send="20"></Card>
      </div>
    </div>
  );
};

export default Cards;
