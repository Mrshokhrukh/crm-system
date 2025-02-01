import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADMINROUTES, REGISTRETORROUTES, ROLES } from "../utils/enums";
import UserSelect from "../components/UserSelect";
import { Eye, EyeOff } from "lucide-react";
import { login } from "../features/auth/authAction";
import { LoginCredentials } from "../types/types";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const { user, isLoggedIn } = useSelector(
    (state: any) => state.authentication
  );
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<any>();

  const onchange = (role: any) => {
    setSelectedRole(role);
    setUserData({ ...userData, role: role.role });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    const credentials: LoginCredentials = userData;

    dispatch(login(credentials));

    if (isLoggedIn && user) {
      switch (user.role.toUpperCase()) {
        case ROLES.ADMIN: {
          console.log("he");
          navigate(`${ADMINROUTES.DASHBOARD}`);
          break;
        }
        case ROLES.CUSTOMER: {
          console.log("he");
          navigate(`${ADMINROUTES.DASHBOARD}`);
          break;
        }
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center bg-cover">
      <div className="bg-white p-8 rounded-md shadow-sm border w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-5 uppercase">
          Login
        </h1>
        <form onSubmit={onSubmit}>
          <div>
            <label
              htmlFor=""
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Xodimni tanlang
            </label>
            <UserSelect value={selectedRole} onchange={onchange} />
          </div>

          <div className="mt-4">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Email <span>*</span>
              <div className="relative">
                <input
                  type={"email"}
                  name="email"
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  value={userData.email || ""}
                  placeholder="email kiriting..."
                  className="outline-none w-full px-4 py-2 border rounded-md focus:ring-black focus:border-gray-600"
                />
              </div>
            </label>
          </div>

          <div className="mt-4">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Parol <span>*</span>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  value={userData.password || ""}
                  placeholder="parol kiriting..."
                  className="outline-none w-full px-4 py-2 border rounded-md focus:ring-black focus:border-gray-600"
                />
                <button
                  className="absolute right-3 top-2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-zinc-800 mt-6 py-2 px-4 text-white rounded-md hover:bg-black transition-all duration-200"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
