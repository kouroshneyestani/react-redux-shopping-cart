// src/hooks/useCartSummary.js
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../features/cart/cartSlice";

/**
 * Custom hook for getting the cart summary.
 * @returns {{ totalPrice: number }}
 */
export const useCartSummary = () => {
    const totalPrice = useSelector(selectTotalPrice);
    return { totalPrice };
};
