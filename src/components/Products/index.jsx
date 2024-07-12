import React, { useEffect, useState } from "react";
import ProductItem from "../ProductsItem";
import { fetchProducts } from "../../services/productService";

/**
 * Products component displaying available products.
 * @returns {JSX.Element} - The Products component.
 */
const Products = () => {
   
    const [products, setProducts] = useState([]);

    // Fetch products data when the component mounts
    useEffect(() => {
        fetchProducts().then((data) => {
            setProducts(data); // Set the products data to state
        });
    }, []);

    

    return (
        <div>
            <h2>Available Products</h2>
            <ul>
                {products.map((product) => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </ul>
        </div>
    );
};

export default Products;
