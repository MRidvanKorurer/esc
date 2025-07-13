import React from "react";
import EscCart from "../components/EscCart";
import VipCart from "../components/VipCart";
import { useRef, useEffect } from "react";
import NewEsc from "../components/NewEsc";
import Comments from "../components/Comments";

const HomePage: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const scrollWidth = sliderRef.current.scrollWidth;
        const clientWidth = sliderRef.current.clientWidth;

        // Otomatik scroll
        if (
          sliderRef.current.scrollLeft + clientWidth >=
          scrollWidth - 10 // sona ulaştıysa başa sar
        ) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: 280 + 20, behavior: "smooth" }); // 280 kart + 20 gap
        }
      }
    }, 6000); // 6 saniyede bir kay

    return () => clearInterval(interval); // Temizlik
  }, []);
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-y-5">
      {/* top - vip */}
      <div
        className="w-full overflow-x-auto scroll-smooth scrollbar-hide"
        ref={sliderRef}
      >
        <div className="flex gap-5 py-6 min-w-fit">
          <div className="flex-shrink-0 w-[280px]">
            <VipCart />
          </div>
          <div className="flex-shrink-0 w-[280px]">
            <VipCart />
          </div>
          <div className="flex-shrink-0 w-[280px]">
            <VipCart />
          </div>
          <div className="flex-shrink-0 w-[280px]">
            <VipCart />
          </div>
          <div className="flex-shrink-0 w-[280px]">
            <VipCart />
          </div>
          <div className="flex-shrink-0 w-[280px]">
            <VipCart />
          </div>
          <div className="flex-shrink-0 w-[280px]">
            <VipCart />
          </div>
          <div className="flex-shrink-0 w-[280px]">
            <VipCart />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-between items-start">
        {/* left */}
        <div className="flex flex-col divide-y divide-purple-600">
          <div className="py-4">
            <EscCart />
          </div>
          <div className="py-4">
            <EscCart />
          </div>
          <div className="py-4">
            <EscCart />
          </div>
          <div className="py-4">
            <EscCart />
          </div>
          <div className="py-4">
            <EscCart />
          </div>
        </div>

        {/* right */}
        <div className=" py-4 flex flex-col gap-y-5">
          <NewEsc />
          <div>
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
