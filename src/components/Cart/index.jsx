import { useSelector, useDispatch } from "react-redux"; // Import useSelector to read state and useDispatch to send actions
import {
    removeItem,
    updateQuantity,
    selectTotalPrice,
} from "../../features/cart/cartSlice"; // Import actions for cart state

const Cart = () => {
    const dispatch = useDispatch(); // Get the dispatch function to send actions
    const cartItems = useSelector((state) => state.cart.items); // Get the cart items from the Redux store
    const totalPrice = useSelector(selectTotalPrice); // Get the total price from the cart selector

    // Handler function to remove an item from the cart
    const handleRemove = (id) => {
        dispatch(removeItem({ id })); // Remove the item from the cart
    };

    // Handler function to update the quantity of an item in the cart
    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity })); // Update the item's quantity
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => handleRemove(item.id)}>
                            Remove
                        </button>
                        <button
                            onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                            }
                        >
                            Increase Quantity
                        </button>
                        <button
                            onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                        >
                            Decrease Quantity
                        </button>
                    </li>
                ))}
            </ul>
            {/* Display the total price */}
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
