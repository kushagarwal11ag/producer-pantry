"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover } from "antd";
import axios from "axios";

import defaultProfile from "../../../public/defaultProfile.svg";

const ProductDesc = ({ cropId }) => {
	const [crop, setCrop] = useState(null);

	useEffect(() => {
		const fetchCrop = async () => {
			try {
				const fetchedCrop = await axios.get(
					`/api/v1/crops/crop/${cropId}`,
					{
						withCredentials: true,
					}
				);
				const cropDetails = fetchedCrop?.data?.data?.[0];
				setCrop(cropDetails);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCrop();
	}, [cropId]);

	const handleDelete = async () => {
		try {
			await axios.delete(`/api/v1/crops/crop/${crop?._id}`);
		} catch (error) {
			console.log(error);
		}
	};

	const content = (
		<div className="flex flex-col">
			<Link
				href={`/crop/${crop?._id}/edit`}
				className="p-2 hover:text-green-600"
			>
				Edit
			</Link>
			<Link
				href="/home"
				className="p-2 hover:text-red-500"
				onClick={handleDelete}
			>
				Delete
			</Link>
		</div>
	);

	const timeLapsed = (createdAt) => {
		const givenDate = new Date(createdAt);
		const currentDate = new Date();
		const differenceInDays =
			(currentDate - givenDate) / (24 * 60 * 60 * 1000);
		return Math.floor(differenceInDays);
	};

	return (
		<>
			{crop && (
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row -mx-4">
						<div className="md:flex-1 px-4">
							<div className="h-fit flex justify-center rounded-lg mb-4">
								<Image
									src={crop.image}
									width={500}
									height={700}
									objectFit="cover"
									alt="Crop image"
									className="rounded-lg"
								/>
							</div>
						</div>
						<div className="md:flex-1 px-4">
							<div className="flex justify-between">
								<h2 className="text-2xl md:text-5xl font-bold text-gray-800  mb-2">
									{crop.name}
								</h2>
								<div>
									<Popover
										content={content}
										placement="bottomRight"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											className="bi bi-three-dots-vertical"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
											/>
										</svg>
									</Popover>
								</div>
							</div>

							<div className="my-4 text-4xl text-gray-700 ">
								${crop.price}
							</div>
							<hr className="opacity-8 my-6"></hr>

							<div>
								<p className="text-gray-600 mt-2">
									{crop.description}
								</p>
							</div>
							<div className="mt-2 text-sm text-gray-500">
								{crop.available
									? `${crop.quantity} in stock`
									: "Out of stock"}
							</div>

							<div className="mt-4">
								<label>Quantity</label>
								<div className="mt-2">
									<input
										type="number"
										defaultValue={1}
										min={1}
										max={10}
										className="border border-[#c9c9c9] pl-4 py-2"
									/>
								</div>
							</div>
							<div className="mt-7">
								<button className="bg-[#363636] text-white py-3 w-full flex items-center gap-3 justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										height="30"
										viewBox="0 0 16 16"
										width="30"
									>
										<g fill="currentColor">
											<path d="m2.5 2c-.27614 0-.5.22386-.5.5s.22386.5.5.5h.2457c.22324 0 .41943.14799.48076.36264l1.58556 5.54944c.18398.64395.77256 1.08792 1.44228 1.08792h4.5687c.6133 0 1.1649-.37343 1.3927-.94291l1.4743-3.6857c.2627-.65686-.2211-1.37139-.9285-1.37139h-8.31292l-.2606-.91208c-.18398-.64395-.77256-1.08792-1.44228-1.08792z" />
											<path d="m6.5 14c.82843 0 1.5-.6716 1.5-1.5s-.67157-1.5-1.5-1.5-1.5.6716-1.5 1.5.67157 1.5 1.5 1.5z" />
											<path d="m10.5 14c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5c-.82843 0-1.5.6716-1.5 1.5s.67157 1.5 1.5 1.5z" />
										</g>
									</svg>{" "}
									Add to cart
								</button>
							</div>
							<hr className="opacity-8 mt-8"></hr>
							<button className="mt-4 flex gap-4 items-center">
								<Image
									src={crop.farmer?.avatar || defaultProfile}
									width={48}
									height={48}
									alt="User avatar"
									className="w-12 h-12 rounded-full object-cover"
								/>
								<span>{crop.farmer?.name}</span>
							</button>
							<p className="my-7">
								Created {timeLapsed(crop.createdAt)} days ago
							</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProductDesc;
