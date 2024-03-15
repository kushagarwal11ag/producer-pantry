import React from "react";
import Navbar from "../components/navbar/Navbar";
import hero_i1 from "../../../public/hero_i1.jpg";
import hero_i2 from "../../../public/hero_i2.jpg";
import hero_i3 from "../../../public/hero_i3.jpg";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className=" relative max-w-[1700px] m-auto">
        <Navbar />

        <div className="hero_section flex flex-col-reverse  md:flex-row gap-5 	  ">
          <div className="hero_text w-[90%] items-center md:items-start md:w-2/4 flex flex-col gap-4 lg:gap-8 xl:gap-8 justify-end xl:justify-center  pl-[5%]  ">
            <h1 className=" text-4xl lg:text-5xl xl:text-6xl font-bold leading-relaxed">
              Discover Fresh, <br />
              Organic Delights
            </h1>
            <p className=" max-w-lg">
              Connecting Farmers, Empowering Communities: Your Source for
              Sustainable Harvests.Join us in Cultivating Change, One Direct
              Connection at a Time.
            </p>
            <button className="bg-[#3a8358] max-w-fit text-white rounded-lg py-3 px-5  cursor-pointer">Explore Products</button>
          </div>
          <div className="hero_img  m-auto md:w-2/4 grid grid-rows-2 grid-cols-3 gap-3">
            <Image
              src={hero_i2}
              alt="farmer"
              className="w-full h-full rounded-b-3xl md:rounded-3xl col-span-3 row-span-2 object-cover min-h-96"
            />

            <Image src={hero_i1} alt="farmer" className="rounded-3xl w-full h-full row-span-1 object-cover hidden md:grid" />
            <Image src={hero_i3} alt="farmer" className="rounded-3xl w-full h-full row-span-1 col-span-2 object-cover hidden md:grid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
