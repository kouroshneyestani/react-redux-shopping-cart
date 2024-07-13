import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon, CartItem } from "../index";
import { formatPrice } from "../../utils/formatPrice";
import {
    removeItem,
    updateQuantity,
    selectTotalPrice,
    selectIsCartOpen,
    closeCart,
} from "../../features/cart/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const isVisible = useSelector(selectIsCartOpen);
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector(selectTotalPrice);
    const cartRef = useRef(null);

    // Handler to remove an item
    const handleRemove = (id) => {
        dispatch(removeItem({ id }));
    };

    // Handler to update quantity
    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                dispatch(closeCart());
            }
        };

        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dispatch, isVisible]);

    const cartContainerClass =
        "w-[340px] max-w-[90%] h-screen top-0 right-0 fixed bg-white overflow-x-hidden transition-transform duration-300 ease-in-out";
    const cartVisibilityClass = isVisible
        ? "translate-x-0"
        : "translate-x-full";

    return (
        <div
            className={`w-full h-screen fixed bg-stone-900 z-50 overflow-hidden before:top-0 before:left-0 before:bg-stone-900 before:fixed before:w-full before:h-screen before:opacity-10 text-sm ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300 ease-in-out`}
        >
            <div
                ref={cartRef}
                className={`${cartContainerClass} ${cartVisibilityClass}`}
            >
                <header className="h-16 flex items-center justify-between px-6 bg-gray-100">
                    <span className="text-md">Shopping Bag</span>
                    <button
                        aria-label="Close cart"
                        className="w-4 h-4 flex items-center justify-center cursor-pointer"
                        onClick={() => dispatch(closeCart())}
                    >
                        <CloseIcon />
                    </button>
                </header>
                <article className="py-6 px-6 overflow-x-auto max-h-[calc(100vh-230px)] scrollbar-custom">
                    {cartItems.length > 0 ? (
                        <ul className="flex flex-col gap-4">
                            {cartItems.map((item) => (
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
