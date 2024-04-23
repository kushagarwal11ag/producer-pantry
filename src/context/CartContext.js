import { createContext } from "react";

export const CartContext = createContext({
	cartTotal: 0,
	setCartTotal: () => {},
});

export const CartProvider = CartContext.Provider;

export default CartContext;
