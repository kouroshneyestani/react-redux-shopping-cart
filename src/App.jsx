import { useState } from "react";

import Products from "./components/Products";
import ShoppingCart from "./components/Cart";

function App() {
    const [isShoppingCartVisible, setIsShoppingCartVisible] = useState(false);

    // Function to toggle the cart visibility
    const toggleShoppingCart = () => {
        setIsShoppingCartVisible(!isShoppingCartVisible);
    };

    return (
        <>
            <div className="app">
                <div>
                    <h1>
                        React Redux Shopping Cart
                        <button onClick={toggleShoppingCart}>
                            Toogle cart
                        </button>
                    </h1>
                    <Products />
                    <ShoppingCart
                        isVisible={isShoppingCartVisible}
                        toggleCart={toggleShoppingCart}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
