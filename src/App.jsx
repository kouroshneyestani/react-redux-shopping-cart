import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "./pages/Products";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/products" element={<Products />} />

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
