import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cart/cartSlice";

/**
 * Custom hook for cart actions like removing items and updating quantity.
 * @returns {{ removeFromCart: (id: number) => void, updateCartItem: (id: number, quantity: number) => void }}
 */
export const useCartActions = () => {
    const dispatch = useDispatch();

    const removeFromCart = (id) => {
        dispatch(removeItem({ id }));
    };

    const updateCartItem = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    return { removeFromCart, updateCartItem };
};
