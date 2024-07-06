import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";

const products = [
    { id: "1", name: "Product 1", price: 10 },
    { id: "2", name: "Product 2", price: 15 },
    { id: "3", name: "Product 3", price: 20 },
];

const Products = () => {
    const dispatch = useDispatch();

    const handleAddProductToCart = (product) => {
        dispatch(addItem({ ...product, quantity: 1 }));
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
