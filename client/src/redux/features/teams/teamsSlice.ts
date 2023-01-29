import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  club: [],
  name: "",
  isLoading: false,
};

export const getTeams = createAsyncThunk(
  "matches/getTeams",

  async (payload: any) => {
    try {
      const options = {
        method: "GET",
        url: `https://api.football-data.org/v4/teams/${payload}`,
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

export const teamsSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeams.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTeams.fulfilled, (state, action) => {
      state.isLoading = false;
      state.club = action.payload;
      state.name = action.payload.name;
    });
    builder.addCase(getTeams.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export default teamsSlice.reducer;
