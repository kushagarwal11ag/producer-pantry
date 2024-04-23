"use client";
import { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import Cart from "@/containers/dashboard/Cart";

const CheckoutPage = () => {
	const [cartTotal, setCartTotal] = useState(0);
	return (
		<CartProvider value={{ cartTotal, setCartTotal }}>
			<Cart />
		</CartProvider>
	);
};

export default CheckoutPage;
