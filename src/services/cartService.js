/**
 * Fetches cart details from the server.
 * @returns {Promise<any>} - A promise that resolves to cart details.
 */
export const fetchCartDetails = async () => {
    // For static data, return a resolved promise with sample data
    return Promise.resolve({
        items: [
            { id: "1", name: "Product 1", price: 10, quantity: 1 },
            { id: "2", name: "Product 2", price: 15, quantity: 2 },
            { id: "3", name: "Product 3", price: 20, quantity: 1 },
        ],
    });
};
