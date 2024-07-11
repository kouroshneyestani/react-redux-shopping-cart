/**
 * Fetches product details from the local JSON file.
 * @returns {Promise<any>} - A promise that resolves to product details.
 */
export const fetchProducts = async () => {
    try {
        const response = await fetch("/products.json"); // Fetch from the JSON file
        if (!response.ok) {
            throw new Error("Network response was not ok"); // Throw error for failed response
        }
        const data = await response.json(); // Parse JSON data
        return data; // Return the parsed data
    } catch (error) {
        console.error("Failed to fetch products:", error); // Log the error
        throw error; // Rethrow the error
    }
};
