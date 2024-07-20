import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addItem, toggleCart } from "../../features/cart/cartSlice";

/**
 * ProductItem component displaying product details and providing an option to add it to the cart.
 * @param {Object} props - The product properties.
 * @param {string} props.id - The product ID.
 * @param {string} props.name - The product name.
 * @param {number} props.price - The product price.
 * @param {string} props.image - The URL of the product image.
 * @param {string} props.link - The link to the product page.
 * @returns {JSX.Element} - The ProductItem component.
 */
const ProductItem = ({ id, name, price, image, link }) => {
    const dispatch = useDispatch();

    // Handler function to add a product to the cart
    const handleAddProductToCart = useCallback(
        (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            dispatch(addItem({ id, name, price, image, quantity: 1 })); // Add the product to the cart with a quantity of 1
            dispatch(toggleCart()); // Open the cart
        },
        [dispatch, id, name, price, image]
    ); // Include all dependencies

    return (
        <div className="group">
            <div className="gap-3 flex flex-col">
                <div className="relative pt-[125%] overflow-hidden">
                    <a aria-label={`View details of ${name}`}>
                        {image && (
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover object-top top-0 left-0 absolute"
                            />
                        )}
                    </a>

                    <div className="w-full h-full left-0 bottom-0 flex items-end absolute p-4 pointer-events-none">
                        <button
                            onClick={handleAddProductToCart}
                            className="w-full h-10 bg-white flex items-center justify-center pointer-events-auto text-sm opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 hover:bg-gray-50 transition-all duration-300"
                            aria-label={`Add ${name} to cart`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div>
                    <a className="hover:underline">{name}</a>
                    <div className="flex items-center gap-1">
                        <span className="text-xs">$</span>
                        {price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProductItem);
