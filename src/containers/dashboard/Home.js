"use client";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import axios from "axios";

import crop1 from "../../../public/crop1.png";
const Home = () => {
	const [crop, setCrop] = useState([]);

	useEffect(() => {
		const fetchCrops = async () => {
			try {
				const cropResponse = await axios.get("/api/crops/all");
				const crops = cropResponse?.data?.crops?.slice(0, 10);
				setCrop(crops);
				console.log(crops);
			} catch (error) {
				console.log(error.message);
			}
		};
		fetchCrops();
	}, []);

	const compareDate = (createdAt) => {
		const givenDate = new Date(createdAt);
		const currentDate = new Date();
		const differenceInDays =
			(currentDate - givenDate) / (1000 * 60 * 60 * 24);
		return differenceInDays < 7;
	};

	return (
		<>
			<section className="container">
				<h1 className="text-center text-4xl font-bold mb-2">
					Our Products
				</h1>

				{/* Product grid */}

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
					{crop.length &&
						crop.map((item) => (
							<div
								className=" border-2 border-[#f6f6f6]  product_card transition-all cursor-pointer"
								key={item._id}
							>
								<div className="relative">
									<Image
										src={crop1}
										width={500}
										height={500}
										alt="crops"
										className=""
									/>
									{compareDate(item.createdAt) && (
										<div className="badge absolute top-4 right-4 text-xs bg-[#80B500]  px-3 py-1 rounded-tl-xl rounded-br-xl text-white">
											NEW
										</div>
									)}
								</div>
								<div className="mt-4 text-center mb-4">
									<span className="font-bold">
										{item.name}
									</span>
									<div className="text-[#80B500] font-bold">
										<span className="mr-3 font-semibold">
											${item.price}
										</span>
									</div>
								</div>
							</div>
						))}
				</div>
			</section>
		</>
	);
};

export default Home;
