import { createSlice } from "@reduxjs/toolkit";
import { STORAGE_KEYS } from "../utils/enums";
const initialState = {
  user: null,
  isLoggedIn: true,
  token: null,
  isLoggingLoading: true,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoggingLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggingLoading = false;

      localStorage.setItem("role", JSON.stringify(action.payload.user.role));
      localStorage.setItem(
        STORAGE_KEYS.TOKEN,
        JSON.stringify(action.payload.token)
      );
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.token = null;
      state.isLoggingLoading = false;
    },
    loginReject: (state, action) => {
      state.error = action.payload;
      state.isLoggingLoading = false;
    },
  },
});

export const { loginSuccess, logout, loginReject, loginRequest } =
  authSlice.actions;
export default authSlice.reducer;
