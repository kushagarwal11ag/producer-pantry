"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import authService from "@/service/auth";
import useAuth from "@/context/auth/useAuth";

const ProtectedLayout = ({ children }) => {
	const router = useRouter();
	const { authStatus } = useAuth();

	useEffect(() => {
		if (!authStatus) {
			router.replace("/login");
			return;
		}
	}, [authStatus, router]);

	return authStatus ? <>{children}</> : null;
};

export default ProtectedLayout;
