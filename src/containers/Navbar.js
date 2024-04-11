"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import logoImg from "../../public/logo.svg";
import menuImg from "../../public/mobileMenu.svg";

import profile1 from "../../public/profile2.jpg";
import { useState } from "react";

// const instance = axios.create({
// 	withCredentials: true,
// });

const Navbar = () => {
	const [profileDrop, setProfileDrop] = useState(false);

	const handleLogout = async () => {
		try {
			await axios.post("/api/v1/users/logout");
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
									<div className="absolute top-full right-0 flex flex-col bg-white text-black w-32 border rounded-2xl border-[#EEEEEE] shadow-lg z-50">
										<Link href="/crop/add" className="p-2 rounded-t-2xl hover:bg-[#3a8358] hover:text-white">
											Add Product
										</Link>
										<hr />
										<Link
											className="p-2 hover:bg-[#3a8358] hover:text-white"
											href="/profile"
										>
											Profile
										</Link>
										<hr />
										<Link
											className="p-2 rounded-b-2xl hover:bg-[#3a8358] hover:text-white"
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
