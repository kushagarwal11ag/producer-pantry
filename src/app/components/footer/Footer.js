import React from "react";
import Image from "next/image";
import logoImg from "../../../../public/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="mt-20">
        <hr className="border-t-2 border-gray-400 my-6" />
        <div>
          <div>
            <Image src={logoImg}/>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
