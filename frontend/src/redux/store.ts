import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import dashboarSlice from "./dashboardSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
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

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
