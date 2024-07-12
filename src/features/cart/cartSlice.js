import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the cart with an empty array for items and isCartOpen to manage cart visibility
const initialState = {
    items: [], // An array to hold cart items
    isCartOpen: false, // State to manage cart visibility
};

// Create a slice for the cart feature
const cartSlice = createSlice({
    name: "cart", // The name of the slice
    initialState, // Set the initial state
    reducers: {
        // Action to add an item to the cart
        addItem: (state, action) => {
            const { id, quantity, name, price, image, link } = action.payload;

            // Check if the item already exists in the cart
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                // If the item exists, increment the quantity
                existingItem.quantity += quantity;
            } else {
                // If the item does not exist, add it to the cart
                state.items.push({ id, quantity, name, price, image, link });
            }
        },
        // Action to remove an item from the cart
        removeItem: (state, action) => {
            const { id } = action.payload;

            // Filter out the item with the given id
            state.items = state.items.filter((item) => item.id !== id);
        },
        // Action to update the quantity of an item in the cart
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;

            // Find the item in the cart
            const item = state.items.find((item) => item.id === id);

            if (item) {
                // Update the item's quantity
                item.quantity = quantity;
            }
        },
        // New action to toggle the cart visibility
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
        // New action to open the cart
        openCart: (state) => {
            state.isCartOpen = true;
        },
        // New action to close the cart
        closeCart: (state) => {
            state.isCartOpen = false;
        },
        // New action to clear all items from the cart
        clearCart: (state) => {
            state.items = [];
        },
    },
});

// Export the action creators
export const {
    addItem,
    removeItem,
    updateQuantity,
    toggleCart,
    openCart,
    closeCart,
    clearCart,
} = cartSlice.actions;

// Selector function to compute the total price of the cart
export const selectTotalPrice = (state) =>
    state.cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

// Selector function to check if the cart is open
export const selectIsCartOpen = (state) => state.cart.isCartOpen;

// Export the reducer for configuring the store
export default cartSlice.reducer;
