import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Cart from "./components/Cart";
import Header from "./components/Header";

// Pages
import Products from "./pages/Products";


function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Products />} />

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
