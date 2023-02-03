import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TournamentState } from "../../../types";

const initialState: TournamentState = {
  tournament: null,
  topScorers: null,
  isLoading: false,
};

export const getTableCompetition = createAsyncThunk(
  "competitions/getTableCompetition",

  async (payload: any) => {
    try {
      const options = {
        method: "GET",
        url: `https://api.football-data.org/v4/competitions/${payload}/standings`,
        headers: { "X-Auth-Token": "1bb65d5d077f4ccba1280a3735cb9242" },
      };

      const data = axios.request(options).then(function (response) {
        return response.data;
      });
      return data.catch(function (error) {
        console.error(error);
      });
    } catch (error) {
      console.log(error);
    }
  }
);
export const getScorersCompetition = createAsyncThunk(
  "competitions/getScorersCompetition",

  async (payload: any) => {
    try {
      const options = {
        method: "GET",
        url: `https://api.football-data.org/v4/competitions/${payload}/scorers`,
        headers: { "X-Auth-Token": "1bb65d5d077f4ccba1280a3735cb9242" },
      };

      const data = axios.request(options).then(function (response) {
        return response.data;
      });
      return data.catch(function (error) {
        console.error(error);
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const competitionsSlice = createSlice({
  name: "competitions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTableCompetition.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTableCompetition.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tournament = action.payload;
    });
    builder.addCase(getTableCompetition.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getScorersCompetition.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getScorersCompetition.fulfilled, (state, action) => {
      state.isLoading = false;
      state.topScorers = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getScorersCompetition.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export default competitionsSlice.reducer;
