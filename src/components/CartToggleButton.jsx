import { useShoppingCart } from "../contexts/ShoppingCartContext";

const CartToggleButton = ({ children }) => {
    const { toggleCart } = useShoppingCart();

    return <div onClick={toggleCart}>{children}</div>;
};

export default CartToggleButton;
