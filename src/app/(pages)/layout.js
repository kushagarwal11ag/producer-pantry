import Navbar from "@/containers/Navbar";

export default function ProtectedLayout({ children }) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
