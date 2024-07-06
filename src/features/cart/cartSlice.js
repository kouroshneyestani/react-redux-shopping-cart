import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the cart with an empty array for items
const initialState = {
    items: [], // An array to hold cart items
};

// Create a slice for the cart feature
const cartSlice = createSlice({
    name: "cart", // The name of the slice
    initialState, // Set the initial state
    reducers: {
        // Action to add an item to the cart
        addItem: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                // If the item exists, increment the quantity
                existingItem.quantity += action.payload.quantity;
            } else {
                // If the item does not exist, add it to the cart
                state.items.push(action.payload);
            }
        },
        // Action to remove an item from the cart
        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            ); // Filter out the item with the given id
        },
        // Action to update the quantity of an item in the cart
        updateQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity = action.payload.quantity; // Update the item's quantity
            }
        },
    },
});

// Export the action creators
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Selector function to compute the total price of the cart
export const selectTotalPrice = (state) => {
    return state.cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
};

// Export the reducer for configuring the store
export default cartSlice.reducer;
