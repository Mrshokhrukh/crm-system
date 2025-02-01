import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: JSON.parse(localStorage.getItem("currentRole") || "{}"),
  isLoggedIn: true,
  token: null,
  isLoggingLoading: true,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReques: (state) => {
      state.isLoggingLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      // state.token = action.payload.token;
      state.isLoggingLoading = false;
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

export const { loginSuccess, logout, loginReject, loginReques } =
  authSlice.actions;
export default authSlice.reducer;
