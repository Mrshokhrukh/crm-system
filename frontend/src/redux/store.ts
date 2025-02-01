import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import dashboarSlice from "./dashboardSlice";

export const store = configureStore({
  reducer: {
    authentication: authSlice,
    dashboard: dashboarSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: true,
    });
  },
});
