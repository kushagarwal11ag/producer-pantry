import { connect } from "@/db/config";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request) {
	try {
		const reqBody = await request.json();
		const { email, password } = reqBody;

		const user = await User.findOne({ email });
		if (!user) {
			return NextResponse.json(
				{ error: "Invalid credentials" },
				{ status: 400 }
			);
		}

		const validPassword = await bcryptjs.compare(password, user.password);
		if (!validPassword) {
			return NextResponse.json(
				{ error: "Invalid credentials" },
				{ status: 400 }
			);
		}

		const accessToken = jwt.sign(
			{ _id: user._id },
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: "1d" }
		);

		const refreshToken = jwt.sign(
			{ _id: user._id },
			process.env.REFRESH_TOKEN_SECRET,
			{ expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
		);

		const loggedInUser = await User.findOneAndUpdate(
			{ _id: user._id },
			{ $set: { refreshToken } },
			{ new: true }
		).select("-password -refreshToken");

		const response = NextResponse.json({
			status: 200,
			message: "Login successful",
			success: true,
			loggedInUser,
		});

		response.cookies.set("accessToken", accessToken, {
			httpOnly: true,
			secure: true,
		});
		response.cookies.set("refreshToken", refreshToken, {
			httpOnly: true,
			secure: true,
		});

		return response;
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
