"use client";
import { useEffect, useState } from "react";

import authService from "@/service/auth";
import { AuthProvider } from "@/context/auth/AuthContext";

const ProtectedLayout = ({ children }) => {
	const [authStatus, setAuthStatus] = useState(false);

	useEffect(() => {
		const checkAuth = async () => {
			const isLoggedIn = await authService.isLoggedIn();
			setAuthStatus(isLoggedIn);
		};

		checkAuth();
	});

	return (
		<AuthProvider value={{ authStatus, setAuthStatus }}>
			{children}
		</AuthProvider>
	);
};

export default ProtectedLayout;
