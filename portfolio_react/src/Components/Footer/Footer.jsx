import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          {" "}
          Feel Free To Reach Out
        </h3>
      </div>
      <ul className="text-sm md:text-xl">
        <li className="flex flex-wrap gap-1 items-center">
          <MdOutlineMailOutline />
          lugunannamalika26@gmai.com
        </li>
        <li className="flex flex-wrap gap-1 items-center">
          <FaLinkedinIn />
          linkedin/username
        </li>
        <li className="flex flex-wrap gap-1 items-center">
          <FaGithub /> gitbub/username
        </li>
      </ul>
    </div>
  );
};

export default Footer;
