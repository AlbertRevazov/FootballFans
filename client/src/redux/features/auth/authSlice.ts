import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
  userName: "",
};

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ name, password, email, phone }: any) => {
    try {
      const { data } = await axios.post("/users/signUp", {
        name,
        password,
        email,
        phone,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/signIn",
  async ({ name, password, email, phone }: any) => {
    try {
      const { data } = await axios.post("/users/signIn", {
        name,
        password,
        email,
        phone,
      });

      if (data.token) {
        window.localStorage.setItem("email", data.user.email);
        window.localStorage.setItem("token", data.token); //// записываем токен в локал сторэдж
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getMe = createAsyncThunk("users/ItsMe", async () => {
  try {
    const { data } = await axios.get("/users/me", {});
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.status = null;
      state.userName = "";
    },
  },
  extraReducers: (builder) => {
    // RegisterUser
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.userName = action.payload.user?.name;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
    });

    //// loginUser
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.userName = action.payload.user.name;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    //// Проверка авторизации

    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = null;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
      state.userName = action.payload.user?.name;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const checkIsAuth = (state: any) => Boolean(state.users?.token);
export const { logout } = authSlice.actions;
export default authSlice.reducer;
