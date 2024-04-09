import { connect } from "@/db/config";
import Crop from "@/models/crop.model";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request) {
	try {
		const crops = await Crop.aggregate([
			{
				$match: {
					available: true,
				},
			},
			{
				$lookup: {
					from: "users",
					localField: "farmer",
					foreignField: "_id",
					as: "farmer",
					pipeline: [
						{
							$addFields: {
								avatar: "$avatar.url",
							},
						},
						{
							$project: {
								_id: 0,
								name: 1,
								avatar: 1,
							},
						},
					],
				},
			},
			{
				$addFields: {
					farmer: {
						$first: "$farmer",
					},
					image: "$image.url",
				},
			},
			{
				$sort: {
					createdAt: -1,
				},
			},
			{
				$project: {
					name: 1,
					image: 1,
					price: 1,
					quantity: 1,
					farmer: 1,
					createdAt: 1,
				},
			},
		]);

		return NextResponse.json({
			status: 200,
			message: "All crops retrieved successfully",
			success: true,
			crops,
		});
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
