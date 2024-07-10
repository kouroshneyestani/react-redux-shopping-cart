// src/App.jsx
import React from "react";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext"; // Import ShoppingCartProvider
import Products from "./components/Products";
import ShoppingCart from "./components/Cart";
import CartToggleButton from "./components/CartToggleButton"; // Import CartToggleButton component

function App() {
    return (
        <ShoppingCartProvider>
            <div>
                <h1>React Redux Shopping Cart</h1>
                <CartToggleButton>[ CART ]</CartToggleButton>
                <Products />
                <ShoppingCart />
            </div>
        </ShoppingCartProvider>
    );
}

export default App;
