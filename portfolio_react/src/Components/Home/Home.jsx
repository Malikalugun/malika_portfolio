import React from "react";
import AvaterImg from "../../assets/hero-2.png";
import TextChange from "../../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20 ">
      <div className="md:w-3/4 mt-10">
        <h1 className="text-3xl md:6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          I design and code beautifully simple things and i love what i do. Just
          simple like that!
        </p>
        <button className="mt-5 md:my-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Hire me
        </button>
      </div>
      <div>
        <img className="" src={AvaterImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
