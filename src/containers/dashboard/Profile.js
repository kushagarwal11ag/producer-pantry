"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import uploadFile from "../../../public/uploadFile.svg";
import defaultProfile from "../../../public/defaultProfile.svg";

let toastId;

const ProfilePage = () => {
	const router = useRouter();

	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		oldPassword: "",
		newPassword: "",
		confirmNewPassword: "",
		address: "",
	});
	const [formStatus, setFormStatus] = useState("");
	const [postFile, setPostFile] = useState({
		avatar: null,
		govId: null,
		certification: null,
	});
	const [imageUrl, setImageUrl] = useState({
		avatar: defaultProfile,
		govId: uploadFile,
		certification: uploadFile,
	});

	useEffect(() => {
		const fetchUser = async () => {
			const fetchedUser = await axios.get("/api/v1/users/current-user", {
				withCredentials: true,
			});

			const userDetails = fetchedUser?.data?.data;
			setUser({
				name: userDetails?.name || "",
				email: userDetails?.email,
				phone: userDetails?.phone || "",
				oldPassword: "",
				newPassword: "",
				confirmNewPassword: "",
				address: userDetails?.address || "",
			});

			setImageUrl((prev) => ({
				...prev,
				avatar: userDetails?.avatar?.url || defaultProfile,
				govId: userDetails?.govId?.url || uploadFile,
				certification: userDetails?.certification?.url || uploadFile,
			}));
		};
		fetchUser();
	}, []);

	const onChange = (event) => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setPostFile((prev) => ({
			...prev,
			[event.target.name]: file,
		}));
		setImageUrl((prev) => ({
			...prev,
			[event.target.name]: URL.createObjectURL(file),
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (
			imageUrl.govId === uploadFile &&
			imageUrl.certification === uploadFile
		) {
			setFormStatus("Add the required documentation");
			return;
		}
		toastId = toast.loading("Updating");
		try {
			await axios.patch(
				"/api/v1/users/update",
				{
					name: user.name,
					address: user.address,
					phone: user.phone,
				},
				{ withCredentials: true }
			);

			await changePassword();

			await updateFiles();

			toast.success("Profile updated successfully", {
				id: toastId,
			});

			setUser({
				name: "",
				email: "",
				phone: "",
				oldPassword: "",
				newPassword: "",
				confirmNewPassword: "",
				address: "",
			});
			setPostFile({
				avatar: null,
				govId: null,
				certification: null,
			});

			setFormStatus("");
			router.push("/home");
		} catch (error) {
			const errorMessage =
				error.response?.data?.message ||
				"Something went wrong. Try again";
			setFormStatus(errorMessage);
			toast.error("Error", {
				id: toastId,
			});
		}
	};

	const updateFiles = async () => {
		try {
			if (postFile.avatar || postFile.govId || postFile.certification) {
				const formData = new FormData();
				if (postFile.avatar) {
					formData.append("avatar", postFile.avatar);
				}
				if (postFile.govId) {
					formData.append("govId", postFile.govId);
				}
				if (postFile.certification) {
					formData.append("certification", postFile.certification);
				}
				await axios.patch("/api/v1/users/update-file", formData, {
					withCredentials: true,
					headers: {
						"Content-Type": "multipart/form-data",
					},
				});
			}
		} catch (error) {
			const errorMessage =
				error.response?.data?.message ||
				"Something went wrong. Try again";
			setFormStatus(errorMessage);
			toast.error("Error", {
				id: toastId,
			});
		}
	};

	const changePassword = async () => {
		if (user.oldPassword && user.newPassword) {
			if (!user.confirmNewPassword) {
				setFormStatus("Please confirm the new password");
				return;
			}
			if (user.newPassword !== user.confirmNewPassword) {
				setFormStatus("New password mismatch");
				return;
			}
			try {
				userPassword = await axios.post(
					"/api/v1/users/change-password",
					{
						oldPassword: user.oldPassword,
						newPassword: user.newPassword,
					},
					{ withCredentials: true }
				);
			} catch (error) {
				const errorMessage =
					error.response?.data?.message ||
					"Something went wrong. Try again";
				setFormStatus(errorMessage);
				toast.error("Error", {
					id: toastId,
				});
			}
		}
	};

	return (
		<>
			<Toaster />
			<div className=" flex items-center justify-center ">
				<div className="container max-w-screen-lg mx-auto pb-12 md:pb-0">
					<div>
						<form onSubmit={handleSubmit}>
							<div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
								<div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-3">
									<div className="text-gray-600 flex flex-col items-center">
										<p className="font-medium text-lg">
											Edit Profile
										</p>
										<p>Please fill out all the fields.</p>
										<Image
											name="avatar"
											src={imageUrl.avatar}
											alt="User Profile Image"
											width={200}
											height={200}
											className="w-52 h-52 m-7 rounded-full object-cover object-contain"
										/>
										<label className="flex gap-2 items-center justify-start">
											<p>Upload Avatar</p>
										</label>
										<input
											type="file"
											name="avatar"
											accept="image/png, image/jpg, image/jpeg, image/svg"
											className="mt-3 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
											onChange={handleFileChange}
										/>
									</div>

									<div className="md:col-span-2">
										{formStatus && (
											<p className="text-[#b42318] border-[#b42318]">
												{formStatus}
											</p>
										)}
										<div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
											<div className="md:col-span-3">
												<label className="text-sm text-gray-600 font-bold">
													Name{" "}
													<span className="text-red-500">
														*
													</span>
												</label>
												<input
													type="text"
													name="name"
													className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border-2 border-[darkgrey] focus:border-[#3a8358] shadow-sm rounded-lg"
													value={user.name}
													onChange={onChange}
													placeholder="Name"
													maxLength={20}
													required
												/>
											</div>

											<div className="md:col-span-2">
												<label className="text-sm text-gray-600 font-bold">
													Email
												</label>
												<input
													type="email"
													name="userEmail"
													className="w-full mt-2 px-3 py-2 text-black bg-[darkgrey] outline-none border-2 border-[darkgrey] shadow-sm rounded-lg"
													value={user.email}
													disabled
												/>
											</div>

											<div className="md:col-span-3">
												<label className="text-sm text-gray-600 font-bold">
													Address{" "}
													<span className="text-red-500">
														*
													</span>
												</label>
												<textarea
													name="address"
													className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border-2 border-[darkgrey] focus:border-[#3a8358] shadow-sm rounded-lg"
													placeholder="Enter address"
													rows={1}
													value={user.address}
													onChange={onChange}
													required
												/>
											</div>

											<div className="md:col-span-2">
												<label className="text-sm text-gray-600 font-bold">
													Phone{" "}
													<span className="text-red-500">
														*
													</span>
												</label>
												<input
													type="text"
													name="phone"
													className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border-2 border-[darkgrey] focus:border-[#3a8358] shadow-sm rounded-lg"
													value={user.phone}
													onChange={onChange}
													placeholder="Enter phone"
													maxLength={20}
													required
												/>
											</div>

											<div className="md:col-span-5">
												<label className="text-sm text-gray-600 font-bold">
													Change password
												</label>
												<section className="flex gap-2">
													<input
														type="password"
														name="oldPassword"
														className="mt-2 w-full px-3 py-2 text-black bg-transparent outline-none border-2 border-[darkgrey] focus:border-[#3a8358] shadow-sm rounded-lg"
														value={user.oldPassword}
														onChange={onChange}
														placeholder="Enter old password"
														maxLength={30}
													/>
													<input
														type="password"
														name="newPassword"
														className="mt-2 w-full px-3 py-2 text-black bg-transparent outline-none border-2 border-[darkgrey] focus:border-[#3a8358] shadow-sm rounded-lg"
														value={user.newPassword}
														onChange={onChange}
														placeholder="Enter new password"
														maxLength={30}
													/>
													<input
														type="password"
														name="confirmNewPassword"
														className="mt-2 w-full px-3 py-2 text-black bg-transparent outline-none border-2 border-[darkgrey] focus:border-[#3a8358] shadow-sm rounded-lg"
														value={
															user.confirmNewPassword
														}
														onChange={onChange}
														placeholder="Confirm new password"
														maxLength={30}
													/>
												</section>
											</div>

											<div className="md:col-span-2 justify-center items-center flex flex-col gap-2">
												<label className="text-sm text-gray-600 font-bold">
													Government ID{" "}
													<span className="text-red-500">
														*
													</span>
												</label>
												<Image
													name="govId"
													src={imageUrl.govId}
													width={200}
													height={200}
													alt="Government ID"
													className="w-52 h-52 object-contain object-cover"
												/>
												<input
													type="file"
													name="govId"
													accept="image/png, image/jpg, image/jpeg, image/svg"
													className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
													onChange={handleFileChange}
												/>
											</div>

											<div className="md:col-span-3 justify-center items-center flex flex-col gap-2">
												<label className="text-sm text-gray-600 font-bold">
													Certification{" "}
													<span className="text-red-500">
														*
													</span>
												</label>
												<Image
													name="certification"
													src={imageUrl.certification}
													width={200}
													height={200}
													alt="Certification"
													className="w-52 h-52 object-contain object-cover"
												/>
												<input
													type="file"
													name="certification"
													accept="image/png, image/jpg, image/jpeg, image/svg"
													className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
													onChange={handleFileChange}
												/>
											</div>

											<div className="md:col-span-5 ">
												<div className="inline-flex items-end">
													<button
														className="bg-[#3a8358] hover:bg-blue-700 text-white py-2 px-4 rounded-2xl"
														type="submit"
													>
														Update
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfilePage;
