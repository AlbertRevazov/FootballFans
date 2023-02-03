import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../../types";
import axios from "../../../utils/axios";

const initialState: UserState = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
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

export const userAvatar = createAsyncThunk(
  "users/userAvatar",
  async (payload: any) => {
    try {
      const { data } = await axios.post("users/userAvatar", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteAvatar = createAsyncThunk("users/deleteAvatar", async () => {
  try {
    const { data } = await axios.get("/users/delete", {});
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
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
    });
    // Добавление Фото
    builder.addCase(userAvatar.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(userAvatar.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = null;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
    });
    builder.addCase(userAvatar.rejected, (state, action) => {
      state.isLoading = false;
    });

    // Удаление фото
    builder.addCase(deleteAvatar.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(deleteAvatar.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = null;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
    });
    builder.addCase(deleteAvatar.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const checkIsAuth = (state: any) => Boolean(state.users?.token);
export const { logout } = authSlice.actions;
export default authSlice.reducer;
