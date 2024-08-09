import { createSlice } from "@reduxjs/toolkit";

type Slice = {
    loading: boolean;
}

const initialState: Slice = {
    loading: false
}

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;