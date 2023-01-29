import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import matchesSlice from "./features/matches/matchesSlice";
import teamsSlice from "./features/teams/teamsSlice";
import competitionsSlice from "./features/competitions/competitionsSlice";

export const store = configureStore({
  reducer: {
    users: authSlice,
    matches: matchesSlice,
    teams: teamsSlice,
    competitions: competitionsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
