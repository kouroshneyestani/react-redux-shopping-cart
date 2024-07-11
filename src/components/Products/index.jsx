import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import { fetchProducts } from "../../services/productService";

/**
 * Products component displaying available products.
 * @returns {JSX.Element} - The Products component.
 */
const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    // Fetch products data when the component mounts
    useEffect(() => {
        fetchProducts().then((data) => {
            setProducts(data); // Set the products data to state
        });
    }, []);

    // Handler function to add a product to the cart
    const handleAddProductToCart = (product) => {
        dispatch(addItem({ ...product, quantity: 1 })); // Add the product to the cart with a quantity of 1
    };

    return (
        <div>
            <h2>Available Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleAddProductToCart(product)}>
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
