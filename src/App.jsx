import Products from "./components/Products";
import Cart from "./components/Cart";

import "./App.css";

function App() {
    return (
        <>
            <div className="app">
                <div>
                    <h1>React Redux Shopping Cart</h1>
                    <Products />
                    <Cart />
                </div>
            </div>
        </>
    );
}

export default App;
