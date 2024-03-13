"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import toast, { Toaster } from "react-hot-toast";

import authService from "@/service/auth";
import useAuth from "@/context/auth/useAuth";

import loginBanner from "../../../public/loginBanner.png"

const Signup = () => {
	const router = useRouter();
	const { setAuthStatus } = useAuth();

	const [credentials, setCredentials] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [formStatus, setFormStatus] = useState("");

	useEffect(() => {
		setCredentials({
			name: "",
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
		try {
			const id = Date.now().toString();
			await toast.promise(
				authService.createUserAccount(id, credentials),
				{
					loading: "Authenticating...",
					success: "Successfully Authenticated",
					error: "Authentication Error",
				}
			);

			setCredentials({
				name: "",
				email: "",
				password: "",
			});

			setFormStatus("");
			setAuthStatus(true);
			router.push("/home");
		} catch (error) {
			setFormStatus(error.message);
		}
	};

	return (
		<>
			<Toaster />
			<section className="min-h-screen flex p-5 gap-10">
				<section className="w-2/4 md:flex items-center justify-center hidden">
				<Image
						src={loginBanner}
						alt="Producer&apos;s pantry"
						className="h-full rounded-3xl bg-cover w-full object-cover -scale-x-100"
					/>
				</section>
				<section className="md:w-2/4 flex justify-center items-center flex-col w-full">
					<div className="max-w-md w-full">
						<p className="text-center text-4xl mb-16 font-bold flex justify-center items-center gap-2">
							Create an account
						</p>
						<div className="flex flex-col gap-3 items-center">
							<p className="font-semibold">
								Please enter your details
							</p>
						</div>

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
