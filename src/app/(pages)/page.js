"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import useAuth from "@/context/auth/useAuth";

import Welcome from "@/containers/Welcome";
const Page = () => {
	const router = useRouter();
	const { authStatus } = useAuth();

	useEffect(() => {
		const navigate = async () => {
			if (authStatus) {
				router.push("/home");
			}
		};

		navigate();
	}, [authStatus, router]);

	if (!authStatus) return <Welcome />;
	return null;
};

export default Page;
