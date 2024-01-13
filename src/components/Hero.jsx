import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center gap-1">
          <p className="md:text-3xl sm:text-2xl text-base font-bold py-4">
            Fast, flexible financing for
          </p>
          <TypeAnimation
            className="md:text-3xl sm:text-2xl text-base font-bold"
            sequence={[
              'BTB',
              1500, // wait 1s before replacing "Mice" with "Hamsters"
              'BTC',
              1500,
              'SASS',
              1500,
            ]}
            wrapper="span"
            speed={-25}
            repeat={Infinity}
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mx-5">
          Monitor your data anlaytics to increase revenue for BTB, BTC & SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto px-6 py-3 my-6 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
