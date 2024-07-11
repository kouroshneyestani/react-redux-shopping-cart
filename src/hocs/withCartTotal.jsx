// src/hocs/withCartTotal.js
import React from "react";
import { useCartSummary } from "../hooks/useCartSummary";

/**
 * HOC to add cart total functionality to a component.
 * @param Component - The component to be wrapped.
 * @returns - The component with cart total functionality.
 */
export const withCartTotal = (Component) => {
    if (typeof Component !== "function") {
        throw new Error("Expected a function as the first argument");
    }

    return (props) => {
        const { totalPrice } = useCartSummary();

        if (typeof totalPrice !== "number") {
            console.error("Invalid totalPrice value from useCartSummary");
        }

        return <Component {...props} totalPrice={totalPrice} />;
    };
};
