"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
	const router = useRouter();

	const [credentials, setCredentials] = useState({
		name: "",
		description: "",
		price: 0,
		quantity: 0,
		available: true,
	});
	const [postFile, setPostFile] = useState(null);
	const [imageURL, setImageURL] = useState("/uploadFile.svg");
	const [formStatus, setFormStatus] = useState("");

	const onChange = (event) => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		});
	};
	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setPostFile(file);
		setImageURL(URL.createObjectURL(file));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const toastId = toast.loading("Uploading");
		try {
			const formData = new FormData();
			formData.append("name", credentials.name);
			formData.append("description", credentials.description);
			formData.append("price", credentials.price);
			formData.append("quantity", credentials.quantity);
			formData.append("available", credentials.available);
			if (postFile) {
				formData.append("image", postFile);
			}

			const response = await axios.post("/api/v1/crops/crop", formData, {
				withCredentials: true,
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			toast.success(response?.data?.message, {
				id: toastId,
			});

			setCredentials({
				name: "",
				description: "",
				price: 0,
				quantity: 0,
				available: true,
			});
			setFormStatus("");
			router.push("/home");
		} catch (error) {
			const errorMessage =
				error.response?.data?.message || "Something went wrong. Try again";
			setFormStatus(errorMessage);
			toast.error("Error", {
				id: toastId,
			});
		}
	};

	const cancelForm = () => {
		setCredentials({
			name: "",
			description: "",
			price: 0,
			quantity: 0,
			available: true,
		});
		router.push("/home");
	};

	return (
		<>
			<Toaster />
			<div className="flex items-center justify-center">
				<div className="container max-w-screen-lg mx-auto pb-12 md:pb-0">
					<div>
						<form onSubmit={handleSubmit}>
							<div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
								<div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
									<div className="text-gray-600">
										<p className="font-medium text-lg">
											Create Crop Post
										</p>
										<p>Please fill out all the fields.</p>
										<img
											src={imageURL}
											alt="Uploaded crop image"
											className="w-52 h-52 mt-10 mb-7 object-cover"
										/>
										<label>Upload crop image</label>
										<input
											type="file"
											name="cropImage"
											accept="image/png, image/jpg, image/jpeg, image/svg"
											className="mt-3 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
											onChange={handleFileChange}
											required
										/>
									</div>

									<div className="md:col-span-2">
										{formStatus && (
											<p className="text-[#b42318] border-[#b42318]">
												{formStatus}
											</p>
										)}
										<div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
											<div className="md:col-span-5">
												<label className="text-sm text-gray-600 font-bold">
													Title
												</label>
												<input
													type="text"
													name="name"
													className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border-2 border-[darkgrey] focus:border-[#3a8358] shadow-sm rounded-lg"
													value={credentials.name}
													placeholder="Enter crop title"
													onChange={onChange}
													minLength={3}
													maxLength={20}
													required
												/>
											</div>
											<div className="md:col-span-5">
												<label className="text-sm text-gray-600 font-bold">
													Description
												</label>
												<textarea
													rows={2}
													name="description"
													className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border-2 border-[darkgrey] focus:border-[#3a8358] shadow-sm rounded-lg"
													value={
														credentials.description
													}
													placeholder="Enter crop description"
													onChange={onChange}
													minLength={3}
													maxLength={150}
													required
												/>
											</div>
											<div className="md:col-span-2">
												<label className="text-sm text-gray-600 font-bold">
													Price
												</label>
												<input
													type="number"
													name="price"
													className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border-2 border-[darkgrey] focus:border-[#3a8358] shadow-sm rounded-lg"
													value={credentials.price}
													placeholder="Enter crop price"
													onChange={onChange}
													required
												/>
											</div>
											<div className="md:col-span-1">
												<label className="text-sm text-gray-600 font-bold">
													Quantity
												</label>
												<input
													type="number"
													name="quantity"
													className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border-2 border-[darkgrey] focus:border-[#3a8358] shadow-sm rounded-lg"
													value={credentials.quantity}
													placeholder="Enter crop quantity"
													onChange={onChange}
													maxLength={1}
													required
												/>
											</div>
											<div className="md:col-span-2">
												<label className="text-sm text-gray-600 font-bold">
													Available
												</label>
												<select
													className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border-2 border-[darkgrey] focus:border-[#3a8358] shadow-sm rounded-lg"
													name="available"
													onChange={onChange}
													value={
														credentials.available
													}
													required
												>
													<option value="true">
														True
													</option>
													<option value="false">
														False
													</option>
												</select>
											</div>
										</div>
										<button
											type="submit"
											className="mt-2 mr-2 w-fit text-center bg-[#3a8358] hover:bg-[#1f3119] text-white py-2 px-4 inline-flex items-center gap-2 rounded-full"
										>
											<Image
												src="/checked.png"
												alt="checked icon"
												width={12}
												height={12}
											/>
											Post
										</button>
										<button
											type="button"
											onClick={cancelForm}
											className="mt-2 w-fit text-center bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-full"
										>
											Cancel Changes
										</button>
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

export default AddProduct;
