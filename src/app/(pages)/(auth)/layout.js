"use client";
import { useEffect } from "react";

import authService from "@/service/auth";
import useAuth from "@/context/auth/useAuth";

const ProtectedLayout = ({ children }) => {
	const { authStatus, setAuthStatus } = useAuth();

	return <>{children}</>;
};

export default ProtectedLayout;
