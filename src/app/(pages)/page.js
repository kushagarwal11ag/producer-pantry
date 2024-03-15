import React from "react";
import Navbar from "../components/navbar/Navbar";
import hero_i1 from "../../../public/hero_i1.jpg";
import hero_i2 from "../../../public/hero_i2.jpg";
import hero_i3 from "../../../public/hero_i3.jpg";
import pp1 from "../../../public/pp1.jpg";
import pp2 from "../../../public/pp2.jpg";
import pp3 from "../../../public/pp3.jpg";
import vision from "../../../public/vision.png";
import mission from "../../../public/mission.png";

import Image from "next/image";
import ServiceCard from "../components/ServiceCard";

const page = () => {
  return (
    <>
      <div className="  max-w-[1700px] m-auto">
        <Navbar />

        {/* Hero Section  */}

        <div className="hero_section flex flex-col-reverse  md:flex-row gap-5 	  ">
          <div className="hero_text w-[90%] items-center md:items-start md:w-2/4 flex flex-col gap-4 lg:gap-8 xl:gap-8 justify-end xl:justify-center  pl-[5%]  ">
            <h1 className=" text-4xl lg:text-5xl xl:text-6xl font-bold 	">
              Discover Fresh,
            </h1>
            <h1 className=" text-4xl lg:text-5xl xl:text-6xl font-bold 	">
              Organic Delights
            </h1>

            <p className=" max-w-lg">
              Connecting Farmers, Empowering Communities: Your Source for
              Sustainable Harvests.Join us in Cultivating Change, One Direct
              Connection at a Time.
            </p>
            <button className="bg-[#3a8358] max-w-fit text-white rounded-lg py-3 px-5  cursor-pointer">
              Explore Products
            </button>
          </div>
          <div className="hero_img  m-auto md:w-2/4 grid grid-rows-2 grid-cols-3 gap-5">
            <Image
              src={hero_i2}
              alt="farmer"
              className="w-full h-full rounded-b-3xl md:rounded-3xl col-span-3 row-span-2 object-cover min-h-96"
            />

            <Image
              src={hero_i1}
              alt="farmer"
              className="rounded-3xl w-full h-full row-span-1 object-cover hidden md:grid"
            />
            <Image
              src={hero_i3}
              alt="farmer"
              className="rounded-3xl w-full h-full row-span-1 col-span-2 object-cover hidden md:grid"
            />
          </div>
        </div>

        {/* Our story section */}

        <div className=" w-[90%] m-auto">
          <h2 className="mb-4 text-5xl font-bold mt-16">Our story</h2>
          <p className=" max-w-3xl">
            Welcome to Producer's Pantry, where we're transforming the
            agricultural landscape in Alabama and beyond. At Producer's Pantry,
            we're passionate about connecting farmers directly with retailers
            and consumers, revolutionizing the way fresh produce is sourced,
            distributed, and enjoyed
          </p>

          <div
            className="grid grid-cols-3 grid-row-2 gap-5 mt-10"
            style={{ gridTemplateRows: "200px 200px" }}
          >
            <Image
              src={pp1}
              alt="farmer"
              className="h-full w-full object-cover rounded-3xl"
            />
            <Image
              src={pp2}
              alt="farmer"
              className="h-full w-full object-cover row-span-2 rounded-3xl"
            />
            <div className="bg-[#e5f5eb] rounded-3xl flex flex-col  justify-center p-5">
              <h3 className=" font-semibold text-2xl mb-3 flex items-center gap-4">
                <Image src={mission} />
                Our Mission
              </h3>
              <p>
                To create a sustainable food system by connecting farmers
                directly with consumers, fostering transparency, fairness, and
                community resilience.
              </p>
            </div>
            <Image
              src={pp3}
              alt="farmer"
              className="h-full w-full object-cover rounded-3xl"
            />

            <div className="bg-[#e5f5eb] rounded-3xl  flex flex-col  justify-center p-5 ">
              <h3 className=" font-semibold text-2xl mb-3 flex items-center gap-4">
                <Image src={vision} />
                Our Vision
              </h3>
              <p>
                A future where everyone has access to fresh, locally-sourced
                produce, farmers are empowered economically, and communities
                thrive through sustainable agriculture.
              </p>
            </div>
          </div>
        </div>

        {/* Our offered services */}

        <div className="w-[90%] m-auto">
          <h2 className="mb-6 text-5xl font-bold mt-16">
            Our Offered Services
          </h2>
          <p className=" max-w-3xl">
            Connecting you with fresh, locally-sourced produce, ensuring
            convenience and quality every step of the way.
          </p>

          <div className="flex gap-5 mt-14">
            <ServiceCard
              icon={mission}
              title="Farm-Fresh Produce"
              text="Discover farm-fresh produce sourced directly from local farmers, ensuring freshness and fair prices while supporting the local agricultural community."
            />
            <ServiceCard
              icon={mission}
              title=" Diverse Selection"
              text="Explore a diverse selection of fruits, vegetables, herbs, dairy, and meat, all sourced from local farms to guarantee premium quality and freshness."
            />
            <ServiceCard
              icon={mission}
              title="Seamless Experience"
              text="Enjoy a seamless shopping experience with our user-friendly platform, offering secure payment options and flexible delivery schedules for your convenience."
            />
            <ServiceCard
              icon={mission}
              title="Transparency & Trust"
              text="Gain insight into the origin and farming practices of your food, ensuring transparency and trust in every purchase. Trace the journey of your produce from farm to table with detailed product descriptions and information."
            />
          </div>
        </div>

        {/* Get in touch section */}

        <div className="w-[90%] mx-auto mt-16">
          <div className="flex ">
            <div className=" w-2/5 ">
              <Image src={hero_i3} className="w-full h-full object-cover rounded-l-3xl"/>
            </div>
            <div className=" w-3/5  bg-[#f2fff6] px-10 py-14 rounded-r-3xl">
              <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
              <div className="flex gap-10 mb-10">
                <div className="flex flex-col gap-1 w-full">
                  <label>Name</label>
                  <input type="text" placeholder="Full Name" className="p-4 rounded-2xl border outline-none border-gray-300"/>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label>Email</label>
                  <input type="email" placeholder="Your E-mail" className="p-4 rounded-2xl border outline-none border-gray-300"/>
                </div>
              </div>
              <div className="flex flex-col  gap-1 w-full">
                <label>MESSAGE</label>
                <textarea placeholder="Your Message" className="p-4 rounded-2xl border outline-none border-gray-300 resize-none min-h-40"/>
              </div>
              <button className="bg-[#3a8358] text-white w-full min-h-14 rounded-lg mt-10">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
