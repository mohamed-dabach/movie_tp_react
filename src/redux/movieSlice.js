import { createSlice } from "@reduxjs/toolkit";
import { set } from "mongoose";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    data: [],
    searchQuery: "s",
    totalResults: 0,
    loading: false,
    error: null,
    page: 1,
    adults: false,
  },

  // reducers
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalResults = action.payload;
    },
    setAdults: (state, action) => {
      state.adults = action.payload;
    },
  },
});

export const {
  setData,
  setSearchQuery,
  setLoading,
  setError,
  setPage,
  setTotalPages,
  setAdults,
} = movieSlice.actions;

export const selectData = (state) => state.movie.data;
export const selectSearchQuery = (state) => state.movie.searchQuery;
export const selectLoading = (state) => state.movie.loading;
export const selectError = (state) => state.movie.error;
export const selectPage = (state) => state.movie.page;
export const selectTotalPages = (state) => state.movie.totalResults;

export const selectAdults = (state) => state.movie.adults;
export default movieSlice.reducer;
