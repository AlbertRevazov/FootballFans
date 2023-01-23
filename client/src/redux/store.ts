import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
  reducer:{
    users: authSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch