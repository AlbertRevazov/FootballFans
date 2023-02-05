import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GamesState, Matches } from "../../../types";

const initialState: GamesState = {
  games: null,
  isLoading: false,
  errorMessage: null,
};

export const getMatches = createAsyncThunk("matches/getMatches", async () => {
  try {
    const options = {
      method: "GET",
      url: "https://api.football-data.org/v4/matches",
      headers: { "X-Auth-Token": "1bb65d5d077f4ccba1280a3735cb9242" },
    };
    const data = axios.request(options).then(function (response) {
      if (response.data) {
        return response.data;
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMatches.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMatches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.games = action.payload?.matches;      
    });
    builder.addCase(getMatches.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message
    });
  },
});
export default matchesSlice.reducer;
