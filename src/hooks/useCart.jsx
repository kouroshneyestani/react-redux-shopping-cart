import { useDispatch, useSelector } from "react-redux";
import { toggleCart, selectIsCartOpen } from "../features/cart/cartSlice";

/**
 * Custom hook for managing cart visibility and toggle functionality.
 * @returns {{ isVisible: boolean, toggleCart: () => void }}
 */
export const useCart = () => {
    // Get the dispatch function from Redux
    const dispatch = useDispatch();

    // Get the cart open/close state from the Redux store
    const isVisible = useSelector(selectIsCartOpen);

    /**
     * Toggles the visibility of the shopping cart.
     */
    const toggleCart = () => {
        dispatch(toggleCart());
    };

    return { isVisible, toggleCart };
};
