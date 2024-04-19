"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const MyCrops = () => {
	const [crops, setCrops] = useState([]);

	useEffect(() => {
		const fetchMyCrops = async () => {
			try {
				const res = await axios.get("/api/v1/crops/my-crops", {
					withCredentials: true,
				});
				const cropData = res?.data?.data;
				setCrops(cropData);
			} catch (error) {
				console.log(error);
			}
		};
		fetchMyCrops();
	}, []);

	return (
		<>
			<section className="w-11/12 max-w-7xl mx-auto">
				<h1 className="text-center text-4xl font-bold mb-2">
					My Crops
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
					{crops.length > 0 &&
						crops.map((crop) => (
							<Link
								className="border-2 border-[#f6f6f6] product_card transition-all cursor-pointer"
								key={crop._id}
								href={`/crop/${crop._id}`}
							>
								<div className="relative w-full h-96 ">
									<div>
										<Image
											src={crop.image}
											alt="crops"
											fill
											style={{ objectFit: "cover" }}
										/>
									</div>
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
						))}
				</div>
			</section>
		</>
	);
};

export default MyCrops;
