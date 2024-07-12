
import { useDispatch } from "react-redux";
import { toggleCart } from "../features/cart/cartSlice";

/**
 * Button component to toggle the shopping cart visibility.
 * @param {Object} props - React props.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @returns {JSX.Element} - The CartToggleButton component.
 */
const CartToggleButton = ({ children }) => {
    const dispatch = useDispatch();

    return <button onClick={() => dispatch(toggleCart())}>{children}</button>;
};

export default CartToggleButton;
