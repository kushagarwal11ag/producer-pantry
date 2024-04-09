import mongoose, { Schema } from "mongoose";

const cropSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			id: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
		},
		price: {
			type: Number,
			required: true,
			validate: {
				validator: Number.isInteger,
				message: "Please use integer for price",
			},
		},
		quantity: {
			type: Number,
			required: true,
			min: 1,
			max: 5,
			validate: {
				validator: Number.isInteger,
				message: "Please use integer for quantity",
			},
		},
		available: {
			type: Boolean,
			default: true,
		},
		farmer: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true }
);

const Crop = mongoose.models.crops || mongoose.model("crops", cropSchema);

export default Crop;
