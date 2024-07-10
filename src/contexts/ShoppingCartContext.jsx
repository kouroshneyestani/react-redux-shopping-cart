// src/contexts/ShoppingCartContext.jsx
import React, { createContext, useState, useContext } from "react";

// Create a Context for the ShoppingCart
const ShoppingCartContext = createContext();

// Create a Provider Component
export const ShoppingCartProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false); // Changed to false to hide the cart initially

    const toggleCart = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <ShoppingCartContext.Provider value={{ isVisible, toggleCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

// Custom hook for using ShoppingCartContext
export const useShoppingCart = () => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error(
            "useShoppingCart must be used within a ShoppingCartProvider"
        );
    }
    return context;
};
