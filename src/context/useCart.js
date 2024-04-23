import { useContext } from "react";
import CartContext from "./CartContext";

const useCart = () => {
	const data = useContext(CartContext);
	return data;
};

export default useCart;
