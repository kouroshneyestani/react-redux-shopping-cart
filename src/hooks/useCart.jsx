import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";

/**
 * Custom hook for managing cart visibility and toggle functionality.
 * @returns {{ isVisible: boolean, toggleCart: () => void }}
 */
export const useCart = () => {
    const { isVisible, toggleCart } = useContext(ShoppingCartContext);
    return { isVisible, toggleCart };
};
