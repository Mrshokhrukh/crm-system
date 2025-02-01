import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: any) => state.authentication);

  const logoutFuntion = () => {
    dispatch(logout());
  };

  return { isLoggedIn, logoutFuntion };
};

export default useAuth();
