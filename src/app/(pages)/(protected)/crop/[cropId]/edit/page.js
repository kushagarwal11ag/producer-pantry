import EditCrop from "@/containers/dashboard/EditCrop";

const page = ({ params }) => {
	const { cropId } = params;

	return (
		<>
			<EditCrop cropId={cropId} />
		</>
	);
};

export default page;
