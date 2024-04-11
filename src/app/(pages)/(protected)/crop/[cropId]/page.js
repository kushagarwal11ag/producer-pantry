import CropDetails from "@/containers/dashboard/CropDetails";

const page = ({ params }) => {
	const { cropId } = params;
	return (
		<>
			<CropDetails cropId={cropId} />
		</>
	);
};

export default page;
