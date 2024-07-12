// src/App.jsx
import React from "react";
import Products from "./components/Products";
import ShoppingCart from "./components/Cart";
import CartToggleButton from "./components/CartToggleButton"; // Import CartToggleButton component

function App() {
    return (
        <div>
            <h1>React Redux Shopping Cart</h1>
            <CartToggleButton>[ CART ]</CartToggleButton>
            <Products />
            <ShoppingCart />
        </div>
    );
}

export default App;
