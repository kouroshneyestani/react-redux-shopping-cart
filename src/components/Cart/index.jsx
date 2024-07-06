import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    removeItem,
    updateQuantity,
    selectTotalPrice,
} from "../../features/cart/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector(selectTotalPrice);

    const handleRemove = (id) => {
        dispatch(removeItem({ id }));
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
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
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
