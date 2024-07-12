import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    removeItem,
    updateQuantity,
    selectTotalPrice,
    selectIsCartOpen,
    closeCart,
} from "../../features/cart/cartSlice";
import { formatPrice } from "../../utils/formatPrice";

const CloseIcon = ({ width = 16, height = 16 }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0.414336 14.1421L14.5565 0L15.9707 1.41421L1.82855 15.5563L0.414336 14.1421Z"
            fill="#000"
        />
        <path
            d="M1.41421 0.142113L15.5563 14.2842L14.1421 15.6985L0 1.55633L1.41421 0.142113Z"
            fill="#000"
        />
    </svg>
);

const QuantityButton = ({
    quantity,
    onIncrement,
    onDecrement,
    disabledDecrement,
}) => (
    <div className="gap-1 flex items-center">
        <button
            className="w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={onDecrement}
            disabled={disabledDecrement}
        >
            -
        </button>
        <span>{quantity}</span>
        <button
            className="w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={onIncrement}
        >
            +
        </button>
    </div>
);

const CartItem = ({ item, onRemove, onQuantityChange }) => (
    <li className="[&:not(:last-child)]:border-b-[1px] border-solid border-gray-200 pb-4">
        <div className="relative">
            <div className="gap-4 flex justify-between">
                <div>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-[90px] h-[90px] object-cover"
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <div className="flex flex-col pt-2">
                        <h6>{item.name}</h6>
                        <ul className="gap-1 flex items-center text-xs">
                            <li>
                                <span>Size: </span>
                                <span>XL</span>,
                            </li>
                            <li>
                                <span>Color: </span>
                                <span>Blue</span>
                            </li>
                        </ul>
                        <button
                            className="top-2 right-0 w-4 h-4 flex items-center justify-center absolute cursor-pointer"
                            onClick={() => onRemove(item.id)}
                        >
                            <CloseIcon width={8} height={8} />
                        </button>
                    </div>
                    <div className="gap-4 flex items-center justify-between">
                        <QuantityButton
                            quantity={item.quantity}
                            onIncrement={() =>
                                onQuantityChange(item.id, item.quantity + 1)
                            }
                            onDecrement={() =>
                                onQuantityChange(item.id, item.quantity - 1)
                            }
                            disabledDecrement={item.quantity <= 1}
                        />
                        <div>
                            <span>$</span>
                            <span className="text-lg">
                                {formatPrice(item.price)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
);

const Cart = () => {
    const dispatch = useDispatch();
    const isVisible = useSelector(selectIsCartOpen);
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector(selectTotalPrice);

    // Memoized filtered items
    const filteredItems = useMemo(() => cartItems, [cartItems]);

    // Handler to remove an item
    const handleRemove = (id) => {
        dispatch(removeItem({ id }));
    };

    // Handler to update quantity
    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
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
                    <button
                        className="w-4 h-4 flex items-center justify-center cursor-pointer"
                        onClick={() => dispatch(closeCart())}
                    >
                        <CloseIcon />
                    </button>
                </header>
                <article className="py-6 px-6 overflow-x-auto">
                    {cartItems.length > 0 ? (
                        <ul className="flex flex-col gap-4">
                            {filteredItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onRemove={handleRemove}
                                    onQuantityChange={handleQuantityChange}
                                />
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center">
                            Your cart is empty. Start shopping!
                        </p>
                    )}
                </article>
                {cartItems.length > 0 && (
                    <footer className="w-full left-0 bottom-0 absolute flex flex-col gap-4 px-6 py-6">
                        <div className="flex items-center justify-between">
                            <span>SUBTOTAL</span>
                            <div>
                                <span>$</span>
                                <span>{formatPrice(totalPrice)}</span>
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
                )}
            </div>
        </div>
    );
};

export default Cart;
