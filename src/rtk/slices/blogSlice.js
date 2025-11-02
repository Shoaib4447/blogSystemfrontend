import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    allBlogs: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { allBlogs } = blogSlice.actions;
export default blogSlice.reducer;
