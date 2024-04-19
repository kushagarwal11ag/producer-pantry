"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Dropdown } from "antd";

import logoImg from "../../public/logo.svg";
import menuImg from "../../public/mobileMenu.svg";
import closeIcon from "../../public/closeIcon.svg";
import defaultProfile from "../../public/defaultProfile.svg";

const Navbar = ({ isProtected = false }) => {
	const [userAvatar, setUserAvatar] = useState(defaultProfile);
	const [showMobileNav, setShowMobileNav] = useState(false);

	const toggleMobileNav = () => {
		setShowMobileNav(!showMobileNav);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			const fetchUserAvatar = async () => {
				try {
					const user = await axios.get("/api/v1/users/current-user", {
						withCredentials: true,
					});
					const userDetails = user?.data?.data;
					setUserAvatar(userDetails?.avatar?.url || defaultProfile);
				} catch (error) {
					console.log(error);
				}
			};

			if (isProtected) fetchUserAvatar();
		}
	}, [typeof window !== "undefined" ? window.location.href : ""]);

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
				<Link href="/crop/add" className="p-2">
					Add Product
				</Link>
			),
		},
		{
			key: "2",
			label: (
				<Link className="p-2" href="/profile">
					Profile
				</Link>
			),
		},
		{
			key: "3",
			label: (
				<Link className="p-2" href="/crop/my">
					My crops
				</Link>
			),
		},
		{
			key: "4",
			label: (
				<Link className="p-2" href="/login" onClick={handleLogout}>
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
							{isProtected ? (
								<>
									<li className="hover:text-orange-600">
										<Link href="/home">Home</Link>
									</li>
									<li className="hover:text-orange-600">
										<Link href="/explore">Explore</Link>
									</li>
									<li className="hover:text-orange-600">
										<Link href="/contact">Contact Us</Link>
									</li>
									<li className="hover:text-orange-600">
										<Link href="/checkoutPage"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25} fill="currentColor"><path d="M19,7H16V6A4,4,0,0,0,8,6V7H5A1,1,0,0,0,4,8V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM10,6a2,2,0,0,1,4,0V7H10Zm8,13a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H8v1a1,1,0,0,0,2,0V9h4v1a1,1,0,0,0,2,0V9h2Z"/></svg></Link>
									</li>
									
								</>
							) : (
								<>
									<li className="hover:text-orange-600">
										<Link href="/login">Login</Link>
									</li>
									<Link
										className="px-5 py-2 rounded-lg hover:bg-orange-600 bg-[#3a8358]"
										href="/signup"
									>
										Signup
									</Link>
								</>
							)}
							{isProtected && (
								<li className="relative">
									<Dropdown
										placement="bottom"
										menu={{
											items,
										}}
									>
										<Image
											src={userAvatar}
											alt="user profile image"
											className="w-10 h-10 rounded-full object-cover"
											width={44}
											height={44}
										/>
									</Dropdown>
								</li>
							)}
						</ul>
						<Image
							src={menuImg}
							alt="mobile navigation"
							className="w-7 h-7 flex md:hidden cursor-pointer"
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
								{isProtected ? (
									<>
										<li>
											<Link
												href="/home"
												onClick={toggleMobileNav}
											>
												Home
											</Link>
										</li>
										<li>
											<Link
												href="/explore"
												onClick={toggleMobileNav}
											>
												Explore
											</Link>
										</li>
										<li>
											<Link
												href="/contact"
												onClick={toggleMobileNav}
											>
												Contact Us
											</Link>
										</li>
										<li>
											<Link
												href="/login"
												onClick={handleLogout}
											>
												Logout
											</Link>
										</li>
									</>
								) : (
									<>
										<li>
											<Link
												href="/login"
												onClick={toggleMobileNav}
											>
												Login
											</Link>
										</li>
										<Link
											href="/signup"
											onClick={toggleMobileNav}
										>
											<button className="bg-[#3a8358] text-white px-5 py-2 rounded-lg">
												Signup
											</button>
										</Link>
									</>
								)}
							</ul>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Navbar;
