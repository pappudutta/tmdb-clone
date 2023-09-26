import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    data: [],
    photos: {},
  },
  reducers: {
    apiDataStore: (state, action) => {
      state.data = action.payload;
    },
    apiPhotosStore: (state, action) => {
      state.photos = action.payload;
    },
  },
});
export const { apiDataStore, apiPhotosStore } = movieSlice.actions;
export default movieSlice.reducer;
