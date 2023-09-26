import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "movie",
  initialState: {
    url: {},
    genre: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genre = action.payload;
    },
  },
});
export const { getApiConfiguration, getGenres } = homeSlice.actions;
export default homeSlice.reducer;
