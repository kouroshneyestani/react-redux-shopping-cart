import { useDispatch } from "react-redux"; // Import useDispatch hook to send actions to the store
import { addItem } from "../../features/cart/cartSlice"; // Import the addItem action from the cart slice

// Define a list of fake products
const products = [
    { id: "1", name: "Product 1", price: 10 },
    { id: "2", name: "Product 2", price: 15 },
    { id: "3", name: "Product 3", price: 20 },
];

const Products = () => {
    const dispatch = useDispatch(); // Get the dispatch function to send actions

    // Handler function to add a product to the cart from the list of products
    const handleAddProductToCart = (product) => {
        dispatch(addItem({ ...product, quantity: 1 })); // Add the product to the cart with a quantity of 1
    };

    return (
        <div>
            <h2>Available Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleAddProductToCart(product)}>
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
