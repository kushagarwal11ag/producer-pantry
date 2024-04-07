"use client"

import Image from "next/image";
import Link from "next/link";

import logoImg from "../../public/logo.svg";
import menuImg from "../../public/mobileMenu.svg";
import userCircle from "../../public/userCircle.svg";
import editProfile from "../../public/editProfile.svg";
import help from "../../public/help.svg";
import logout from "../../public/logout.svg";



import profile1 from "../../public/profile2.jpg";
import { useState } from "react";

const Navbar = () => {
  const [profileDrop, setProfileDrop] = useState(false);
  return (
    <>
      <div className="navbar_container container bg-[#1f3119]  m-auto text-white rounded-lg fixed top-3 md:top-4 right-0 left-0  z-[1000]">
        <div className="navbar_div flex justify-between h-[70px] px-5 md:px-12 py-1 items-center">
          <div className="navbar_left">
            <Image src={logoImg} alt="logo" className="w-10 md:w-16 " />
          </div>
          <div className="navbar_right">
            <ul className=" gap-8 items-center hidden md:flex">
              <li>
                <a href="#home">Home</a>{" "}
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contactUs">Contact Us</a>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <Link href="/signup">
                <button className="bg-[#3a8358] px-5 py-2 rounded-lg">
                  signup
                </button>
              </Link>
              <li className="relative">
                <Image
                  src={profile1}
                  className="w-11 h-11 rounded-full"
                  onClick={() => setProfileDrop(!profileDrop)}
                />

                {profileDrop && (
                  <div className="absolute top-16 right-[-120px] bg-white text-black w-64 border border-[#EEEEEE] shadow-lg px-8 py-5">

					<h3 className="mb-3">Kushal Agarwal</h3>
					<hr/>
					<p className="flex gap-3 my-3"><Image src={userCircle} className="w-6 h-6"/> My Profile</p>
					<hr/>
					<p className="flex gap-3 my-3"><Image src={editProfile} className="w-6 h-6"/> Edit Profile</p>
					<hr/>
					<p className="flex gap-3 my-3"><Image src={editProfile} className="w-6 h-6"/> Add Product</p>
					<hr/>
					<p className="flex gap-3 my-3"><Image src={help} className="w-6 h-6"/> Help</p>
					<hr/>
					<p className="flex gap-3 my-3"><Image src={logout} className="w-6 h-6"/> Logout</p>
				  </div>
                )}
              </li>
            </ul>
            <Image
              src={menuImg}
              alt="mobile navigation"
              className=" w-7 h-7 flex md:hidden cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
