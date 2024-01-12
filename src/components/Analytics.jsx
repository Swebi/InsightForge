import React from "react";
import Lapimage from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px]  mx-4 grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Lapimage} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl font-bold py-2 sm:text-3xl md:text-4xl">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Welcome to our Data Analytics Dashboard, where data management
            becomes effortless and insights flow seamlessly. With centralized
            access to diverse data sources, you can enhance organizational
            efficiency by eliminating data silos. Gain real-time insights,
            visualize trends, and foster collaboration within your team. The
            power to make informed decisions is just a click away. Get
            started and embark on a journey of streamlined data
            analytics.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium mx-auto md:mx-0 px-6 py-3 my-6 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
