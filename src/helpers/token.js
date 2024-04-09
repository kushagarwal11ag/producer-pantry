import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const tokenData = (request) => {
	try {
		const token =
			request.cookies.get("accessToken")?.value ||
			req.header("Authorization")?.replace("Bearer ", "") ||
			"";
		if (!token) {
			return NextResponse.json(
				{ error: "Unauthorized request. No access token provided." },
				{ status: 401 }
			);
		}

		const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
		return decodedToken._id;
	} catch (error) {
		return NextResponse.json(
			{ error: "Invalid access token. Please authenticate." },
			{ status: 401 }
		);
	}
};
