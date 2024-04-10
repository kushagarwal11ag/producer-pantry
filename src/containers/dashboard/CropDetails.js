import React from "react";
import Image from "next/image";

import crop1 from "../../../public/crop1.png";
import profile1 from "../../../public/profile2.jpg";
const ProductDesc = () => {
	return (
		<>
			<div className="w-11/12 max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
					<div className="max-w-lg">
						<Image src={crop1} alt="Crop" />
					</div>
					<div>
						<h3 className="font-semibold text-2xl mb-5">
							Vegetables Juices
						</h3>
						<div>
							<span className="text-[#80B500] font-semibold text-5xl mr-6">
								$49.00
							</span>
						</div>
						<hr className="opacity-80 mt-4"></hr>
						<div className=" my-7">
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Aliquam rem officia, corrupti
								reiciendis minima nisi modi, quasi, odio minus
								dolore impedit fuga eum eligendi.
							</p>
						</div>
						<hr className="opacity-80   "></hr>

						<div className="my-4 flex gap-4">
							<span>Size / Weight:</span>
							<ul className="flex gap-5">
								<li>50g</li>
								<li>100g</li>
								<li>150g</li>
								<li>200g</li>
							</ul>
						</div>
						<hr className="opacity-8"></hr>
						<div className="mt-4">
							<div className="flex gap-4 items-center cursor-pointer">
								<Image
									src={profile1}
									alt="User avatar"
									className="w-12 h-12 rounded-full"
								/>
								<span>Kushal Agarwal</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDesc;
