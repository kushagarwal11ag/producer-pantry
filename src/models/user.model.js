import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: true,
			index: true,
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ["farmer", "retailer"],
			required: true,
		},
		avatar: {
			id: {
				type: String,
			},
			url: {
				type: String,
			},
		},
		govId: {
			id: {
				type: String,
			},
			url: {
				type: String,
			},
		},
		certification: {
			id: {
				type: String,
			},
			url: {
				type: String,
			},
		},
		address: {
			type: String,
		},
		phone: {
			type: String,
		},
		refreshToken: {
			type: String,
		},
	},
	{ timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
