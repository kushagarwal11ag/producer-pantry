"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Navbar from "@/containers/Navbar";

export default function ProtectedLayout({ children }) {
	const router = useRouter();

	useEffect(() => {
		const fetchUser = async () => {
			try {
				await axios.get("/api/v1/users/current-user", {
					withCredentials: true,
				});
			} catch (error) {
				if (error.response.status === 401) {
					router.push("/login");
				}
			}
		};
		fetchUser();
	}, []);

	return (
		<>
			<Navbar isProtected={true} />
			{children}
		</>
	);
}
