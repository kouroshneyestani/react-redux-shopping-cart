import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Products from "./pages/Products";

// Components
import Cart from "./components/Cart";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/products" element={<Products />} />

                    <Route
                        path="*"
                        element={
                            <div className="text-center">
                                404 - Page Not Found
                            </div>
                        }
                    />
                </Routes>
                
                <Cart />
            </Router>
        </>
    );
}

export default App;
