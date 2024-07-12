import { useSelector, useDispatch } from "react-redux";
import { toggleCart, selectTotalQuantity } from "../features/cart/cartSlice";

/**
 * Button component to toggle the shopping cart visibility.
 * @param {Object} props - React props.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @returns {JSX.Element} - The CartToggleButton component.
 */
const CartToggleButton = ({ children }) => {
    const dispatch = useDispatch();
    const quantity = useSelector(selectTotalQuantity);

    return (
        <button onClick={() => dispatch(toggleCart())}>
            {children}
            {quantity > 0 && quantity}
        </button>
    );
};

export default CartToggleButton;
