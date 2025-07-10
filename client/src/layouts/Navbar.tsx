import React from "react";
import { AiOutlineHeatMap } from "react-icons/ai";
import { FaChevronCircleDown } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <div className=" flex justify-between px-3 bg-black py-10">
      <div className=" flex justify-center items-center">
        <AiOutlineHeatMap size={60} />
        <h2 className=" font-bold tracking-widest text-purple-600 text-2xl">
          VİPESKORT
        </h2>
      </div>
      <div>
        <div className="group flex justify-center items-center gap-x-2 cursor-pointer px-8 py-4 rounded transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white">
          <AiOutlineHeatMap size={30} />
          <p className="transition-colors duration-300">İlçeler</p>
          <FaChevronCircleDown className="transition-transform duration-300 group-hover:rotate-180" />
        </div>
      </div>
      <div>
        <div className="group flex justify-center items-center gap-x-2 cursor-pointer px-8 py-4 rounded transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white">
          <AiOutlineHeatMap size={30} />
          <p>Reklam&İletişim</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
