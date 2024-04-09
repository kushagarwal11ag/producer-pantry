import { connect } from "@/db/config";
import { NextResponse } from "next/server";
import { tokenData } from "@/helpers/token";
import User from "@/models/user.model";

connect();

export async function POST(request) {
	try {
		const userId = await tokenData(request);
		const user = await User.findByIdAndUpdate(
			userId,
			{
				$unset: {
					refreshToken: 1,
				},
			},
			{
				new: true,
			}
		);
		const response = NextResponse.json({
			message: "Logout successful",
			success: true,
		});
		response.cookies.set("accessToken", "", {
			httpOnly: true,
			secure: true,
			expires: new Date(0),
		});
		response.cookies.set("refreshToken", "", {
			httpOnly: true,
			secure: true,
			expires: new Date(0),
		});
		return response;
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
