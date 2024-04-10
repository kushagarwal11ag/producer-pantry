"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import toast, { Toaster } from "react-hot-toast";

import loginBanner from "../../../public/loginBanner.png";
import loginHand from "../../../public/loginHand.png";

const Login = () => {
	const router = useRouter();

	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const [formStatus, setFormStatus] = useState("");

	useEffect(() => {
		setCredentials({
			email: "",
			password: "",
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
		try {
			const response = await axios.post("/api/v1/users/login", {
				email: credentials.email,
				password: credentials.password,
			});

			toast.success(response?.data?.message, {
				id: toastId,
			});

			setCredentials({
				email: "",
				password: "",
			});
			setFormStatus("");
			router.push("/home");
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
				<section className="lg:w-2/4 flex justify-center items-center flex-col w-full">
					<div className="max-w-md w-full">
						<p className="text-center text-4xl mb-16 font-bold flex justify-center items-center gap-2">
							Welcome back
							<Image src={loginHand} alt="" className=" w-12" />
						</p>

						<div className="mt-5">
							<form
								onSubmit={handleSubmit}
								className="flex flex-col gap-3 items-center"
							>
								{formStatus && (
									<p className="text-red-500">{formStatus}</p>
								)}
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

								<button className="bg-orange-600 text-white px-4 py-3 w-full rounded-full cursor-pointer my-6">
									Log In
								</button>
							</form>
							<p className="text-center text-gray-400 ">
								Don&apos;t have an account?{" "}
								<Link
									href="/signup"
									className="text-black cursor-pointer"
								>
									Sign up
								</Link>
							</p>
						</div>
					</div>
				</section>
				<section className="w-2/4 md:flex hidden">
					<Image
						src={loginBanner}
						alt="Producer's pantry"
						className="rounded-3xl bg-cover object-cover"
					/>
				</section>
			</section>
		</>
	);
};

export default Login;
