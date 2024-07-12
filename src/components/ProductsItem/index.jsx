// src/components/Products/Item.js
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";

/**
 * Item component displaying product details and providing an option to add it to the cart.
 * @param {Object} props - The product properties.
 * @param {string} props.name - The product name.
 * @param {number} props.price - The product price.
 * @param {string} props.image - The URL of the product image.
 * @param {string} props.link - The link to the product page.
 * @returns {JSX.Element} - The Item component.
 */
const Item = (product) => {
    const dispatch = useDispatch();
    const { id, name, price, image, link } = product;

    // Handler function to add a product to the cart
    const handleAddProductToCart = () => {
        dispatch(addItem({ ...product, quantity: 1 })); // Add the product to the cart with a quantity of 1
    };

    return (
        <div>
            <a href={link}>
                <img src={image} alt={name} />
                <div>
                    {name} - ${price.toFixed(2)}
                </div>
            </a>
            <button onClick={handleAddProductToCart}>Add to Cart</button>
        </div>
    );
};

export default Item;
