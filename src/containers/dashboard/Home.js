"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Home = ({ all = true }) => {
	const compareDate = (createdAt) => {
		const givenDate = new Date(createdAt);
		const currentDate = new Date();
		const differenceInDays =
			(currentDate - givenDate) / (1000 * 60 * 60 * 24);
		return differenceInDays < 7;
	};

	const [crops, setCrops] = useState([]);

	useEffect(() => {
		const fetchCrops = async () => {
			try {
				const res = await axios.get("/api/v1/crops/all-crops", {
					withCredentials: true,
				});
				const cropData = res?.data?.data;
				all ? setCrops(cropData) : setCrops(cropData?.slice(0, 8));
			} catch (error) {
				console.log(error);
			}
		};
		fetchCrops();
	}, []);

	return (
		<>
			<section className="w-11/12 max-w-7xl mx-auto">
				{all && (
					<h1 className="text-center text-4xl font-bold mb-2">
						Our Products
					</h1>
				)}

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
					{crops.length > 0 &&
						crops.map(
							(crop) =>
								crop.available && (
									<Link
										className="border-2 border-[#f6f6f6] product_card transition-all cursor-pointer"
										key={crop._id}
										href={`crop/${crop._id}`}
									>
										<div className="relative w-full h-96 ">
											<div>
												<Image
													src={crop.image}
													alt="crops"
													fill
													style={{
														objectFit: "cover",
													}}
												/>
											</div>

											{compareDate(crop.createdAt) && (
												<div className="badge absolute top-4 right-4 text-xs bg-[#80B500]  px-3 py-1 rounded-tl-xl rounded-br-xl text-white">
													NEW
												</div>
											)}
										</div>
										<div className="py-2 text-center mb-4">
											<span className="font-bold">
												{crop.name}
											</span>
											<div className="text-green-800 font-semibold">
												${crop.price}
											</div>
										</div>
									</Link>
								)
						)}
				</div>
			</section>
		</>
	);
};

export default Home;
