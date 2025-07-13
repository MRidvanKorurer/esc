import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps {
  children: any;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className=" bg-slate-950 mx-auto text-white">
      <Header />
      <Navbar />
      <div className=" p-4 flex flex-col gap-10">
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
