
const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {


        additem(state, action) {
            state.push(action.payload)
            console.log("PRODUCT IS ADDED IN CART.");
        },


        removeitem(state, action) {
            console.log("PRODUCT IS REMOVED IN CART.");
            return state.filter((item) => item.name !== action.payload.name);
        },
    },
});

export const { additem, removeitem } = cartSlice.actions;
export default cartSlice.reducer;