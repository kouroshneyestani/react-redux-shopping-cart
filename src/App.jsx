import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "./components/Products";
import ShoppingCart from "./components/Cart";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route
                    path="*"
                    element={
                        <div className="text-center">404 - Page Not Found</div>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
