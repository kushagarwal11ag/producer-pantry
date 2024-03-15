import React from "react";
import Image from "next/image";

const ServiceCard = ({ icon, title, text }) => {
	return (
		<>
			<div className="border-2  border-[#9ed3b5] rounded-3xl flex flex-col gap-3  w-80 px-7 py-5 cursor-pointer transition-all hover:bg-[#f2fff6] hover:shadow-xl">
				<Image alt={title} src={icon} />
				<h3 className="font-semibold text-xl">{title}</h3>
				<p>{text}</p>
			</div>
		</>
	);
};

export default ServiceCard;
