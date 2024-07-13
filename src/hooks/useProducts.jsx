// src/hooks/useProducts.js
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

/**
 * Custom hook for fetching products.
 * @returns {Object} - An object containing products, loading state, and error.
 */
export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { products, loading, error };
};
