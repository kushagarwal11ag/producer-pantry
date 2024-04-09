import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/logo.svg";

const Footer = () => {
	return (
		<>
			<div className="container mt-20">
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
							most sustainable produce possible.
						</p>
					</div>

					<div>
						<h5 className="text-xl font-semibold my-4 md:mt-0">
							Explore
						</h5>
						<ul className="flex flex-col gap-2">
							<Link href="/home">Home</Link>
							<Link href="/explore">Explore</Link>
							<Link href="/contact">Contact</Link>
						</ul>
					</div>
					<div>
						<h5 className="text-xl font-semibold my-4 md:mt-0">
							Socials
						</h5>
						<ul className="flex flex-col gap-2">
							<Link href="#">Facebook</Link>
							<Link href="#">Instagram</Link>
							<Link href="#">Twitter</Link>
							<Link href="#">YouTube</Link>
						</ul>
					</div>
					<div>
						<h5 className="text-xl font-semibold my-4 md:mt-0">
							Contact
						</h5>
						<ul className="flex flex-col gap-2">
							<p>+91 1234567890</p>
							<p>contact@gmail.com</p>
							<p>2972 West Rd, Santa Ana, Illinois 85486</p>
						</ul>
					</div>
				</div>
				<hr className="border-t-2 border-gray-400 my-5 " />

				<p className="text-center mb-3">
					Copyright @producers pantry. All Right Reserved
				</p>
			</div>
		</>
	);
};

export default Footer;
