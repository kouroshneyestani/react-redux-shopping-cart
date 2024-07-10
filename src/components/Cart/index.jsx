import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector to read state and useDispatch to send actions
import {
    removeItem,
    updateQuantity,
    selectTotalPrice,
} from "../../features/cart/cartSlice"; // Import actions for cart state

const Cart = ({ isVisible, toggleCart }) => {
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
        <div
            className={`w-full h-screen fixed bg-white z-50 overflow-hidden before:top-0 before:left-0 before:bg-stone-900 before:fixed before:w-full before:h-screen before:opacity-10 text-sm ${
                isVisible
                    ? "pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
        >
            <div
                className={`w-[340px] max-w-[90%] h-screen top-0 right-0 fixed bg-white overflow-x-hidden transition-all ${
                    isVisible ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <header className="h-16 flex items-center justify-between px-6 bg-gray-100">
                    <span className="text-md">Shopping Bag</span>
                    <button className="w-8 h-8" onClick={toggleCart}>
                        x
                    </button>
                </header>
                <article className="bg-blue-100 pb-300 overflow-x-auto">
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price} x {item.quantity}
                                <button onClick={() => handleRemove(item.id)}>
                                    Remove
                                </button>
                                <button
                                    onClick={() =>
                                        handleQuantityChange(
                                            item.id,
                                            item.quantity + 1
                                        )
                                    }
                                >
                                    Increase Quantity
                                </button>
                                <button
                                    onClick={() =>
                                        handleQuantityChange(
                                            item.id,
                                            item.quantity - 1
                                        )
                                    }
                                    disabled={item.quantity <= 1}
                                >
                                    Decrease Quantity
                                </button>
                            </li>
                        ))}
                    </ul>
                </article>
                <footer className="w-full left-0 bottom-0 absolute flex flex-col gap-4 px-6 py-6">
                    <div className="flex items-center justify-between">
                        <span>SUBTOTAL</span>
                        <div>
                            <span>$</span>
                            <span>{totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="w-full h-10 bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                            <span>View Cart</span>
                        </button>
                        <button className="w-full h-10 bg-black hover:bg-black flex items-center justify-center text-white">
                            <span>Checkout</span>
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Cart;
