"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import toast, { Toaster } from "react-hot-toast";

import loginBanner from "../../../public/loginBanner.png";

const Signup = () => {
	const router = useRouter();

	const [credentials, setCredentials] = useState({
		name: "",
		email: "",
		password: "",
		cPassword: "",
		role: "farmer",
	});

	const [formStatus, setFormStatus] = useState("");

	useEffect(() => {
		setCredentials({
			name: "",
			email: "",
			password: "",
			cPassword: "",
			role: "farmer",
		});
	}, [formStatus]);

	const onChange = (event) => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const toastId = toast.loading("Authenticating...");
		if (credentials.password !== credentials.cPassword) {
			setFormStatus("Passwords must match!");
			return;
		}
		try {
			const response = await axios.post("/api/v1/users/register", {
				name: credentials.name,
				email: credentials.email,
				password: credentials.password,
				role: credentials.role,
			});

			toast.success(response?.data?.message, {
				id: toastId,
			});

			setCredentials({
				name: "",
				email: "",
				password: "",
				cPassword: "",
			});
			setFormStatus("");
			router.push("/login");
		} catch (error) {
			const errorMessage =
				error.response?.data?.message || "Something went wrong";
			setFormStatus(errorMessage);
			toast.error("Error", {
				id: toastId,
			});
		}
	};

	return (
		<>
			<Toaster />
			<section className="w-11/12 max-w-7xl mx-auto flex p-5 gap-10">
				<section className="w-2/4 md:flex hidden">
					<Image
						src={loginBanner}
						alt="Producer's pantry"
						className="rounded-3xl bg-cover object-cover -scale-x-100"
					/>
				</section>
				<section className="md:w-2/4 flex justify-center items-center flex-col w-full">
					<div className="max-w-md w-full">
						<p className="text-center text-4xl m-2 font-bold">
							Create an account
						</p>
						<p className="font-semibold text-center">
							Please enter your details
						</p>

						<div className="mt-5">
							<form
								onSubmit={handleSubmit}
								className="flex flex-col gap-3"
							>
								{formStatus && (
									<p className="text-red-500">{formStatus}</p>
								)}
								<input
									className="border-2 w-full rounded-full py-3 px-3 outline-none"
									type="text"
									name="name"
									value={credentials.name}
									onChange={onChange}
									required
									aria-describedby="name"
									placeholder="Enter your name"
									maxLength={20}
								/>
								<input
									className="border-2 w-full rounded-full py-3 px-3 outline-none"
									type="email"
									name="email"
									value={credentials.email}
									onChange={onChange}
									required
									aria-describedby="email"
									placeholder="Enter email"
								/>
								<input
									className="border-2 w-full rounded-full py-3 px-3 outline-none"
									type="password"
									name="password"
									value={credentials.password}
									onChange={onChange}
									required
									placeholder="Enter your password"
								/>
								<input
									className="border-2 w-full rounded-full py-3 px-3 outline-none"
									type="password"
									name="cPassword"
									value={credentials.cPassword}
									onChange={onChange}
									required
									placeholder="Confirm your password"
								/>

								<h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
									Enter your Profession
								</h3>
								<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-full sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
									<li className="w-full border-gray-200 dark:border-gray-600">
										<div className="flex items-center ps-3">
											<input
												id="horizontal-list-radio-license"
												name="role"
												type="radio"
												value="farmer"
												checked={
													credentials.role ===
													"farmer"
												}
												onChange={onChange}
												className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
											/>
											<label
												htmlFor="horizontal-list-radio-license"
												className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
											>
												Farmer
											</label>
										</div>
									</li>
									<li className="w-full border-gray-200 dark:border-gray-600">
										<div className="flex items-center ps-3">
											<input
												id="horizontal-list-radio-id"
												name="role"
												type="radio"
												value="retailer"
												checked={
													credentials.role ===
													"retailer"
												}
												onChange={onChange}
												className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
											/>
											<label
												htmlFor="horizontal-list-radio-id"
												className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
											>
												Retailer
											</label>
										</div>
									</li>
								</ul>

								<button className="bg-orange-600 text-white px-4 py-3 w-full rounded-full cursor-pointer my-6">
									Join Now
								</button>
							</form>
							<p className="text-center  text-gray-400 ">
								Already have an account?{" "}
								<Link
									href="/login"
									className="text-black cursor-pointer"
								>
									Log In
								</Link>
							</p>
						</div>
					</div>
				</section>
			</section>
		</>
	);
};

export default Signup;
