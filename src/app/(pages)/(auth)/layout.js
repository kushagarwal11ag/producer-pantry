"use client";
import { useEffect } from "react";

import authService from "@/service/auth";
import useAuth from "@/context/auth/useAuth";

const AuthLayout = ({ children }) => {
	const { authStatus, setAuthStatus } = useAuth();

	useEffect(() => {
		if (authStatus) {
			authService.logout().then(() => {
				setAuthStatus(false);
			});
		}
	}, []);

	return <>{children}</>;
};

export default AuthLayout;
