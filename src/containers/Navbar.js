"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Dropdown, Space } from "antd";
import logoImg from "../../public/logo.svg";
import menuImg from "../../public/mobileMenu.svg";
import closeIcon from "../../public/closeIcon.svg";

import profile1 from "../../public/profile2.jpg";
import { useState } from "react";

// const instance = axios.create({
// 	withCredentials: true,
// });


const Navbar = () => {

	const [showMobileNav, setShowMobileNav] = useState(false);
	const toggleMobileNav = () => {
		setShowMobileNav(!showMobileNav);
	  };
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/users/logout");
    } catch (error) {
      console.error(error.message);
    }
  };

  const items = [
	{
	  key: "1",
	  label: (
		<Link href="/crop/add" className="p-2 ">
		  Add Product
		</Link>
	  ),
	},
	{
	  key: "2",
	  label: (
		<Link className="p-2 " href="/profile">
		  Profile
		</Link>
	  ),
	},
	{
		key: "3",
		label: (
		  <Link className="p-2 " href="/my-crops">
			My crops
		  </Link>
		),
	  },
	{
	  key: "4",
	  label: (
		  <Link
		  className="p-2 "
		  href="/login"
		  onClick={handleLogout}
	  >
		  Logout
	  </Link>
	  ),
	 
	},
   
  ];
  return (
    <>
      <div className="navbar_container w-11/12 max-w-7xl mx-auto bg-[#1f3119] text-white rounded-lg m-4 z-50">
        <div className="navbar_div flex justify-between h-[70px] px-5 md:px-12 py-1 items-center">
          <Link className="navbar_left" href="/">
            <Image
              src={logoImg}
              alt="logo"
              width={64}
              height={64}
              className="w-10 md:w-16 "
            />
          </Link>
          <div className="navbar_right">
            <ul className=" gap-8 items-center hidden md:flex">
              <li className="hover:text-[#3a8358]">
                <Link href="/home">Home</Link>
              </li>
              <li className="hover:text-[#3a8358]">
                <Link href="/explore">Explore</Link>
              </li>
              <li className="hover:text-[#3a8358]">
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className="hover:text-[#3a8358]">
                <Link href="/login">Login</Link>
              </li>
              <Link
                className="bg-[#3a8358] px-5 py-2 rounded-lg"
                href="/signup"
              >
                Signup
              </Link>
              <li className="relative">
                <Dropdown
                  placement="bottom"
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Image
                      src={profile1}
                      alt="user profile image"
                      className="w-11 h-11 rounded-full"
                      width={44}
                      height={44}
                    />
                  </a>
                </Dropdown>

             
              </li>
            </ul>
            <Image
              src={menuImg}
              alt="mobile navigation"
              className=" w-7 h-7 flex md:hidden cursor-pointer"
              width={28}
              height={28}
			  onClick={toggleMobileNav}
            />
          </div>
        </div>
		{showMobileNav && (
          <div className="mobile_nav bg-white text-black fixed top-0 bottom-0 left-0 z-[101] w-full md:w-72 transition-transform duration-300 ease-in-out transform translate-x-0">
            <div className="mobile_nav_header flex justify-between items-center px-5 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Menu</h3>
              <Image
                src={closeIcon}
                alt="close icon"
                className="w-6 h-6 cursor-pointer"
                onClick={toggleMobileNav}
              />
            </div>
            <div className="mobile_nav_links px-5 py-3 ">
              <ul className="flex flex-col gap-8 items-center ">
                <li>
                
				  <Link href="/home"onClick={toggleMobileNav}>Home</Link>
                </li>
                <li>
				<Link href="/explore"onClick={toggleMobileNav}>Explore</Link>
                </li>
                <li>
				<Link href="/contact"onClick={toggleMobileNav}>Contact Us</Link>
                </li>
                <li>
                  <Link href="/login" onClick={toggleMobileNav}>Login</Link>
                </li>
                <Link href="/signup" onClick={toggleMobileNav}>
                  <button className="bg-[#3a8358] px-5 py-2 rounded-lg">
                    Signup
                  </button>
                </Link>

              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
