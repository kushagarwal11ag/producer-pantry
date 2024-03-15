import React from "react";
import Image from "next/image";
import logoImg from "../../public/logo.svg";

const Footer = () => {
	return (
		<>
			<div className="mt-20">
				<hr className="border-t-2 border-gray-400 my-6" />
				<div className="py-10 flex-col   md:flex md:flex-row  w-[90%] mx-auto gap-[10%]">
					<div className="max-w-sm ">
						<Image
							src={logoImg}
							alt="logo"
							className=" w-14 mb-4"
						/>
						<p>
							Our mission is to provide you with the freshest and
							most sustainable produce possible
						</p>
					</div>

					<div>
						<h5 className="text-xl font-semibold mb-4 mt-4 md:mt-0">
							Explore
						</h5>
						<ul className="flex flex-col gap-2">
							<li>Home</li>
							<li>Services</li>
							<li>Contact Us</li>
							<li>Login</li>
						</ul>
					</div>
					<div>
						<h5 className="text-xl font-semibold mb-4 mt-4 md:mt-0">
							Socials
						</h5>
						<ul className="flex flex-col gap-2">
							<li>Facebook</li>
							<li>Instagram</li>
							<li>Twitter</li>
							<li>YouTube</li>
						</ul>
					</div>
					<div>
						<h5 className="text-xl font-semibold mb-4 mt-4 md:mt-0">
							Contact
						</h5>
						<ul className="flex flex-col gap-2">
							<li>+91 1234567890</li>
							<li>contact@gmail.com</li>
							<li>
								2972 Westheimer Rd, Santa Ana,illinois 85486
							</li>
						</ul>
					</div>
				</div>
				<hr className="border-t-2 border-gray-400 my-5 w-[90%] mx-auto" />

				<p className="text-center mb-3">
					Copyright @producers pantry. All Right Reserved
				</p>
			</div>
		</>
	);
};

export default Footer;
