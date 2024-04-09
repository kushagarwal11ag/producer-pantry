import { connect } from "@/db/config";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request) {
	try {
		const reqBody = await request.json();
		const { name, email, password, role } = reqBody;
		if (!(role === "farmer" || role === "retailer")) {
			return NextResponse.json(
				{ error: "Invalid role selected" },
				{ status: 400 }
			);
		}
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return NextResponse.json(
				{ error: "User already exists" },
				{ status: 400 }
			);
		}

		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		const user = await User.create({
			name,
			email,
			password: hashedPassword,
			role,
		});

		const createdUser = await User.findById(user._id).select(
			"-password -refreshToken"
		);

		return NextResponse.json({
			status: 200,
			message: "User registered successfully",
			success: true,
			createdUser,
		});
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
