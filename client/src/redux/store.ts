import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import matchesSlice from "./features/matches/matchesSlice";
import teamsSlice from "./features/teams/teamsSlice";

export const store = configureStore({
  reducer: {
    users: authSlice,
    matches: matchesSlice,
    teams: teamsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
