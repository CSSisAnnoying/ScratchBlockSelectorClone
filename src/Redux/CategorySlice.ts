import { createSlice } from "@reduxjs/toolkit";

interface CategoryState {
    category: String;
}

const initialState: CategoryState = {
    category: "Movement"
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.category = action.payload
        }
    }
})

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;