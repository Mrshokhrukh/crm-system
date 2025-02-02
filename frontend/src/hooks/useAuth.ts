import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user, isLoggingLoading, token } = useSelector(
    (state: any) => state.authentication
  );

  const logoutFuntion = () => {
    dispatch(logout());
  };

  return { isLoggedIn, user, isLoggingLoading, token, logoutFuntion };
};

export default useAuth;
