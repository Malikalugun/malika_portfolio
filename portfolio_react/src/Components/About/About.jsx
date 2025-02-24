import React from "react";
import AboutImg from "../../assets/avater.webp";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <div className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Us </h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="about image" />
          <ul>
            <div className="flex gap-3 py-4">
              <FaArrowRight />
              <span className="w-96">
                <h1 className="text-xl md:text2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-sm leading-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  nihil, minus quos mollitia fugiat quo fuga, omnis sed, eaque
                  iure reprehenderit consequatur reiciendis recusandae! Nulla
                  vero mollitia facere voluptates repudiandae!
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <FaArrowRight />
              <span className="w-96">
                <h1 className="text-xl md:text2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-sm leading-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  nihil, minus quos mollitia fugiat quo fuga, omnis sed, eaque
                  iure reprehenderit consequatur reiciendis recusandae! Nulla
                  vero mollitia facere voluptates repudiandae!
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <FaArrowRight />
              <span className="w-96">
                <h1 className="text-xl md:text2xl font-semibold leading-normal">
                  Flutter Developer
                </h1>
                <p className="text-sm md:text-sm leading-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  nihil, minus quos mollitia fugiat quo fuga, omnis sed, eaque
                  iure reprehenderit consequatur reiciendis recusandae! Nulla
                  vero mollitia facere voluptates repudiandae!
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
