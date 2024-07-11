import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useCart, useCartActions, useProductSearch } from "../../hooks/index";
import { withCartTotal } from "../../hocs/";
import { formatPrice } from "../../utils/formatPrice";

/**
 * Close Icon component.
 * @returns {JSX.Element} - The Close Icon component.
 */
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

/**
 * Cart component displaying items in the shopping cart.
 * @param {Object} props
 * @param {number} props.totalPrice - The total price of the items in the cart.
 * @returns {JSX.Element} - The Cart component.
 */
const Cart = ({ totalPrice }) => {
    const { isVisible, toggleCart } = useCart(); // Use the custom cart hook for visibility
    const { searchTerm, updateSearchTerm } = useProductSearch(); // Hook for product search
    const cartItems = useSelector((state) => state.cart?.items); // Get cart items from Redux store

    // Actions from custom hook
    const { removeFromCart, updateCartItem } = useCartActions();

    // Memoized filtered items
    const filteredItems = useMemo(
        () =>
            cartItems.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        [cartItems, searchTerm]
    );

    // Handler to search products
    const handleSearch = (event) => {
        updateSearchTerm(event.target.value);
    };

    // Handler to remove an item
    const handleRemove = (id) => {
        removeFromCart(id);
    };

    // Handler to update quantity
    const handleQuantityChange = (id, quantity) => {
        updateCartItem(id, quantity);
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
                        onClick={toggleCart}
                    >
                        <CloseIcon />
                    </button>
                </header>
                <article className="py-6 px-6 overflow-x-auto">
                    {cartItems.length > 0 && (
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearch}
                            placeholder="Search products"
                            className="w-full mb-4 p-2 border border-gray-300"
                        />
                    )}
                    <ul className="flex flex-col gap-4">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="[&:not(:last-child)]:border-b-[1px] border-solid border-gray-200 pb-4"
                                >
                                    <div className="relative">
                                        <div className="gap-4 flex justify-between">
                                            <div>
                                                <div className="w-[90px] h-[90px] bg-gray-300"></div>
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
                                                        onClick={() =>
                                                            handleRemove(
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        <CloseIcon
                                                            width={8}
                                                            height={8}
                                                        />
                                                    </button>
                                                </div>
                                                <div className="gap-4 flex items-center justify-between">
                                                    <div className="gap-1 flex items-center">
                                                        <button
                                                            className="w-6 h-6 flex items-center justify-center cursor-pointer"
                                                            onClick={() =>
                                                                handleQuantityChange(
                                                                    item.id,
                                                                    item.quantity -
                                                                        1
                                                                )
                                                            }
                                                            disabled={
                                                                item.quantity <=
                                                                1
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                        <span>
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            className="w-6 h-6 flex items-center justify-center cursor-pointer"
                                                            onClick={() =>
                                                                handleQuantityChange(
                                                                    item.id,
                                                                    item.quantity +
                                                                        1
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <span>$</span>
                                                        <span className="text-lg">
                                                            {formatPrice(
                                                                item.price
                                                            )}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p className="text-center">
                                Your cart is empty. Start shopping!
                            </p>
                        )}
                    </ul>
                </article>
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
            </div>
        </div>
    );
};

// Enhance the Cart component with HOCs
export default withCartTotal(Cart);
