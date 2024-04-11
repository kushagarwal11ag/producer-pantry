"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

import crop1 from "../../../public/crop1.png";
import defaultProfile from "../../../public/defaultProfile.svg";

const ProductDesc = ({ cropId }) => {
	const [crop, setCrop] = useState(null);

	useEffect(() => {
		const fetchCrop = async () => {
			try {
				const fetchedCrop = await axios.get(
					`/api/v1/crops/crop/${cropId}`,
					{ withCredentials: true }
				);
				const cropDetails = fetchedCrop?.data?.data?.[0];
				setCrop(cropDetails);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCrop();
	}, [cropId]);

	const timeLapsed = (createdAt) => {
		const givenDate = new Date(createdAt);
		const currentDate = new Date();
		const differenceInDays = (currentDate - givenDate) / (24 * 60 * 60 * 1000);
		return Math.floor(differenceInDays)
	};

	return (
		<>
			{crop && (
				<div className="w-11/12 max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
						<Image
							src={crop.image}
							layout="responsive"
							objectFit="cover"
							quality={100}
							width={320}
							height={320}
							alt="Crop image"
							className="max-w-lg place-self-center"
						/>
						<div>
							<h3 className="font-semibold text-2xl mb-5">
								{crop.name}
							</h3>
							<div className="text-[#80B500] font-semibold text-5xl mr-6">
								${crop.price}
							</div>
							<hr className="opacity-80 mt-4"></hr>
							<p className="my-7">Quantity: {crop.quantity}</p>
							<p className="my-7">{crop.description}</p>
							<p className="my-7">Available: {crop.available ? "True" : "False"}</p>
							<hr className="opacity-80"></hr>
							<hr className="opacity-8"></hr>
							<button className="mt-4 flex gap-4 items-center">
								<Image
									src={crop.farmer?.avatar || defaultProfile}
									width={48}
									height={48}
									alt="User avatar"
									className="object-cover object-center rounded-full"
								/>
								<span>{crop.farmer?.name}</span>
							</button>
							<p className="my-7">Created {timeLapsed(crop.createdAt)} day ago</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProductDesc;
