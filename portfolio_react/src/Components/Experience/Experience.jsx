import React from "react";
import { FaCss3 } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { FaReact } from "react-icons/fa";
export default function Experience() {
  return (
    <div id="Experience" className="p-10 md:p-24 ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 ">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#FF9900" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F0DB4F" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#FF9900" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DBFB" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#4db33d" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#FF9900" size={50} />
          </span>
        </div>
        <div>
          {" "}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaGoogle color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer,Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2025 - Present
              </p>
              <ul className="text-sm p-2">
                <li>Work as software Developer</li>
                <li>Sinior SDE Developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <SiNetflix color="#D81F26" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer,Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2025 - Present
              </p>
              <ul className="text-sm p-2">
                <li>Work as software Google</li>
                <li>Sinior SDE Developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaAmazon color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer,Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2025 - Present
              </p>
              <ul className="text-sm p-2">
                <li>Work as software Amazon</li>
                <li>Sinior SDE Developer</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
