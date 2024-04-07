import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";

import crop1 from "../../../public/crop1.png";
const Home = () => {
  return (
    <>
 
      <section className="container mt-40 ">
        <h1 className="text-center text-4xl font-bold mb-2">Our Products</h1>
        <p className="text-center">
          A highly efficient slip-ring scanner for today's diagnostic
          requirements.
        </p>

        {/* Product grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          <div className=" border-2 border-[#f6f6f6]  product_card transition-all cursor-pointer">
            <div className="relative">
              <Image src={crop1} alt="crops" className="" />
              <div className="badge absolute top-4 right-4 text-xs bg-[#80B500]  px-3 py-1 rounded-tl-xl rounded-br-xl text-white">
                NEW
              </div>
            </div>
            <div className="mt-4 text-center mb-4">
              <span className="font-bold">Carrots Group Scal</span>
              <div className="text-[#80B500] font-bold">
                <span className="mr-3 font-semibold">$32.00</span>
                <del className=" opacity-70">$46.00</del>
              </div>
            </div>
          </div>
          <div className=" border-2 border-[#f6f6f6]  product_card transition-all cursor-pointer">
            <div>
              <Image src={crop1} alt="crops" className="" />
            </div>
            <div className="mt-4 text-center mb-4">
              <span className="font-bold">Carrots Group Scal</span>
              <div className="text-[#80B500] font-bold">
                <span className="mr-3 font-semibold">$32.00</span>
                <del className=" opacity-70">$46.00</del>
              </div>
            </div>
          </div>
          <div className=" border-2 border-[#f6f6f6]  product_card transition-all cursor-pointer">
            <div className="relative">
              <Image src={crop1} alt="crops" className="" />
              <div className="badge absolute top-4 right-4 text-xs bg-[#80B500]  px-3 py-1 rounded-tl-xl rounded-br-xl text-white">
                NEW
              </div>
            </div>
            <div className="mt-4 text-center mb-4">
              <span className="font-bold">Carrots Group Scal</span>
              <div className="text-[#80B500] font-bold">
                <span className="mr-3 font-semibold">$32.00</span>
                <del className=" opacity-70">$46.00</del>
              </div>
            </div>
          </div>
          <div className=" border-2 border-[#f6f6f6]  product_card transition-all cursor-pointer">
            <div>
              <Image src={crop1} alt="crops" className="" />
            </div>
            <div className="mt-4 text-center mb-4">
              <span className="font-bold">Carrots Group Scal</span>
              <div className="text-[#80B500] font-bold">
                <span className="mr-3 font-semibold">$32.00</span>
                <del className=" opacity-70">$46.00</del>
              </div>
            </div>
          </div>
          <div className=" border-2 border-[#f6f6f6]  product_card transition-all cursor-pointer">
            <div>
              <Image src={crop1} alt="crops" className="" />
            </div>
            <div className="mt-4 text-center mb-4">
              <span className="font-bold">Carrots Group Scal</span>
              <div className="text-[#80B500] font-bold">
                <span className="mr-3 font-semibold">$32.00</span>
                <del className=" opacity-70">$46.00</del>
              </div>
            </div>
          </div>
          <div className=" border-2 border-[#f6f6f6]  product_card transition-all cursor-pointer">
            <div className="relative">
              <Image src={crop1} alt="crops" className="" />
              <div className="badge absolute top-4 right-4 text-xs bg-[#80B500]  px-3 py-1 rounded-tl-xl rounded-br-xl text-white">
                NEW
              </div>
            </div>
            <div className="mt-4 text-center mb-4">
              <span className="font-bold">Carrots Group Scal</span>
              <div className="text-[#80B500] font-bold">
                <span className="mr-3 font-semibold">$32.00</span>
                <del className=" opacity-70">$46.00</del>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
