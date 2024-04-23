"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useCart from "@/context/useCart";

const CartProduct = ({ crop }) => {
	let [count, setCount] = useState(crop?.quantity);
	const { setCartTotal } = useCart();
	const lastQuantity = useRef(crop?.quantity);

	const decreaseCount = () => {
		if (count > 1) {
			setCount(count - 1);
		} else if (count === 1) {
			handleRemoveFromCart();
		}
	};
	const increaseCount = () => {
		setCount(count + 1);
	};
	const price = crop?.price;
	const total = parseFloat((price * count).toFixed(2));

	useEffect(() => {
		const initialTotal = parseFloat((price * crop?.quantity).toFixed(2));
		setCartTotal((prev) => parseFloat((prev + initialTotal).toFixed(2)));

		return () => {
			setCartTotal((prev) =>
				parseFloat((prev - initialTotal).toFixed(2))
			);
		};
	}, []);

	useEffect(() => {
		const quantityDifference = count - lastQuantity.current;
		const priceChange = parseFloat((price * quantityDifference).toFixed(2));
		setCartTotal((prev) => parseFloat((prev + priceChange).toFixed(2)));
		lastQuantity.current = count;
	}, [count]);

	const handleRemoveFromCart = async () => {
		try {
			await axios.delete(`/api/v1/crops/cart/${crop?.cropId}`, {
				withCredentials: true,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<tbody>
				<tr>
					<td className="py-4">
						<div className="flex items-center">
							<img
								className="h-16 w-16 mr-4 object-cover"
								src={crop?.image}
								alt="Product image"
							/>
							<span className="font-semibold">{crop?.name}</span>
						</div>
					</td>
					<td className="py-4">${price}</td>
					<td className="py-4">
						<div className="flex items-center">
							<button
								className="border rounded-md py-2 px-4 mr-2"
								onClick={decreaseCount}
							>
								-
							</button>
							<span className="text-center w-8">{count}</span>
							<button
								className="border rounded-md py-2 px-4 ml-2"
								onClick={increaseCount}
							>
								+
							</button>
						</div>
					</td>
					<td className="py-4">${total}</td>
				</tr>
			</tbody>
		</>
	);
};

export default CartProduct;
