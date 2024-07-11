import React, { createContext, useState, useContext } from "react";

/**
 * Context for managing the visibility of the shopping cart.
 * @type {React.Context<{ isVisible: boolean, toggleCart: () => void }>}
 */
export const ShoppingCartContext = createContext();

/**
 * Provider Component for ShoppingCartContext.
 * @param {Object} props - React props.
 * @param {React.ReactNode} props.children - The children components.
 * @returns {JSX.Element} - The ShoppingCartProvider component.
 */
export const ShoppingCartProvider = ({ children }) => {
    // State to manage cart visibility
    const [isVisible, setIsVisible] = useState(false);

    /**
     * Toggles the visibility of the shopping cart.
     */
    const toggleCart = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <ShoppingCartContext.Provider value={{ isVisible, toggleCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

/**
 * Custom hook for accessing ShoppingCartContext.
 * @returns {{ isVisible: boolean, toggleCart: () => void }} - The context values.
 * @throws Will throw an error if used outside of ShoppingCartProvider.
 */
export const useShoppingCart = () => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error(
            "useShoppingCart must be used within a ShoppingCartProvider"
        );
    }
    return context;
};
