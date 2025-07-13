import React, { useState } from "react";
import { AiOutlineHeatMap } from "react-icons/ai";
import { FaChevronCircleDown } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between px-3 bg-black py-10 relative">
        <div className="flex justify-center items-center">
          <AiOutlineHeatMap size={60} />
          <h2 className="font-bold tracking-widest text-purple-600 text-2xl">
            VİPESKORT
          </h2>
        </div>

        {/* İlçeler hover alanı (buton + modal birlikte sarıldı) */}
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="relative"
        >
          <div className="group flex justify-center items-center gap-x-2 cursor-pointer px-8 py-4 rounded transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white">
            <AiOutlineHeatMap size={30} />
            <p className="transition-colors duration-300">İlçeler</p>
            <FaChevronCircleDown
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Modal */}
          <div
            className={`absolute left-1/2 top-full mt-5 transform -translate-x-1/2 transition-all duration-500 ease-in-out bg-purple-100 overflow-hidden shadow-md z-10 ${
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            } w-[90vw] max-w-6xl`}
          >
            <div className="p-10">
              <h3 className="text-2xl font-bold mb-4 text-purple-800">
                İlçeler
              </h3>
              <p className="text-gray-700">
                Buraya ilçelerin listesi, filtreler veya diğer içerikler
                gelebilir.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="group flex justify-center items-center gap-x-2 cursor-pointer px-8 py-4 rounded transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white">
            <AiOutlineHeatMap size={30} />
            <p>Reklam&İletişim</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
