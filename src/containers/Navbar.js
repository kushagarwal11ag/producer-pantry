"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import logoImg from "../../public/logo.svg";
import menuImg from "../../public/mobileMenu.svg";
import userCircle from "../../public/userCircle.svg";
import editProfile from "../../public/editProfile.svg";
import help from "../../public/help.svg";
import logout from "../../public/logout.svg";

import profile1 from "../../public/profile2.jpg";
import { useState } from "react";

// const instance = axios.create({
// 	withCredentials: true,
// });

const Navbar = () => {
	const [profileDrop, setProfileDrop] = useState(false);

	const handleLogout = async () => {
		try {
			await axios.post("/api/users/logout");
		} catch (error) {
			console.error(error.message);
		}
	};

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
							<li>
								<Link href="/home">Home</Link>
							</li>
							<li>
								<Link href="/explore">Explore</Link>
							</li>
							<li>
								<Link href="/contact">Contact Us</Link>
							</li>
							<li>
								<Link href="/login">Login</Link>
							</li>
							<Link
								className="bg-[#3a8358] px-5 py-2 rounded-lg"
								href="/signup"
							>
								Signup
							</Link>
							<li className="relative">
								<button
									onClick={() => setProfileDrop(!profileDrop)}
								>
									<Image
										src={profile1}
										alt="user profile image"
										className="w-11 h-11 rounded-full"
										width={44}
										height={44}
									/>
								</button>

								{profileDrop && (
									<div className="absolute top-full right-0 bg-white text-black w-64 border border-[#EEEEEE] shadow-lg px-8 py-5 z-50">
										<h3 className="mb-3">Kushal Agarwal</h3>
										<hr />
										<p className="flex gap-3 my-3">
											Profile
										</p>
										<hr />
										<hr />
										<Link
											href="/crop/add"
											className="flex gap-3 my-3"
										>
											Add Product
										</Link>
										<hr />
										<Link
											className="flex gap-3 my-3"
											href="/contact"
										>
											Contact Us
										</Link>
										<hr />
										<Link
											className="flex gap-3 my-3"
											href="/login"
											onClick={handleLogout}
										>
											Logout
										</Link>
									</div>
								)}
							</li>
						</ul>
						<Image
							src={menuImg}
							alt="mobile navigation"
							className=" w-7 h-7 flex md:hidden cursor-pointer"
							width={28}
							height={28}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
