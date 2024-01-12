import React from "react";

const Card = ({ imagePath, user, price, storage, granted, send,}) => {
  return (
    <div className="w-full shadow-xl flex flex-col p-12 my-12 md:py-8 rounded-lg hover:scale-105 duration-300">
      <img
        src={imagePath}
        className="w-20 mx-auto mt-[-3rem] bg-white"
        alt=""
      />
      <h2 className="text-2xl font-bold text-center py-8">{user}</h2>
      <p className="text-4xl text-center font-bold">${price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{storage} Storage</p>
        <p className="py-2 border-b mx-8">{granted} Allowed</p>
        <p className="py-2 border-b mx-8">Send up to {send} GB</p>
      </div>
      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto px-6 py-3 my-6 text-black">
        Start Trial
      </button>
    </div>
  );
};

export default Card;
