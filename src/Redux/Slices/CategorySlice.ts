import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../CategoryInfo.ts";

type CategoryState = {
    category: string;
    updatedByClick?: boolean;
}

const initialState: CategoryState = {
    category: categories[0],
    updatedByClick: false
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.category = action.payload.category;
            state.updatedByClick = action.payload.updatedByClick == null ? true : action.payload.updatedByClick;
            console.log(action.payload.updatedByClick);
        }
    }
})

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;