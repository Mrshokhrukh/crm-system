
import apiAdmin from "../../services/API";

const apiAuth = {
  loginFn: async (credentials: any) => {
    try {
      const data = await apiAdmin
        .post("/login", credentials)
        .then((res) => res.data);
      return data;
    } catch (error) {
      throw new Error("login failed");
    }
  },
  logoutFn: async () => {
    try {
      const resp = await apiAdmin.post("/logout");
      return resp.data;
    } catch (error) {
      throw new Error("logout failed");
    }
  },
};
export default apiAuth
