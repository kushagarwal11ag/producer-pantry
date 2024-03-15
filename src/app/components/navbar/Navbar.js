import Image from "next/image";

import logoImg from "../../../../public/logo.svg";
import menuImg from "../../../../public/mobileMenu.svg";
import Link from "next/link";


const Navbar = () => {
  return (
    <>
      <div className="navbar_container bg-[#1f3119] w-[90%] m-auto text-white rounded-lg fixed top-3 md:top-4 right-0 left-0 max-w-[1700px]">
        <div className="navbar_div flex justify-between h-[70px] px-5 md:px-12 py-1 items-center">
          <div className="navbar_left">
           <Image src={logoImg} className="w-10 md:w-16 "/>
          </div>
          <div className="navbar_right">
            <ul className=" gap-8 items-center hidden md:flex">
              <li>Home</li>
              <li>Services</li>
              <li>Contact Us</li>
              <li><Link href="/login">Login</Link></li>
              <Link href="/signup">
              <button className="bg-[#3a8358] px-5 py-2 rounded-lg">
                signup
              </button>
              </Link>
            </ul>
            <Image src={menuImg} className=" w-7 h-7 flex md:hidden cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
