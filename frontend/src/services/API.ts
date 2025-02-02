import axios from "axios";
import { STORAGE_KEYS } from "../utils/enums";

const apiAdmin = axios.create({
  baseURL: `http://localhost:5723/api/`,
});

apiAdmin.interceptors.request.use(
  (config: any) => {
    //import token from local storage
    let token = localStorage.getItem(STORAGE_KEYS.TOKEN) || "";

    if (token) {
      config.headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error: any) => Promise.reject(error)
);

apiAdmin.interceptors.response.use(
  (response) => {
    const token = response.data.token;
    localStorage.setItem(STORAGE_KEYS.TOKEN, JSON.stringify(token));
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem(STORAGE_KEYS.TOKEN);
      //(`unauthorized :)`);
      //localStorage.removeItem("persist:root");
      //removeLocalStorageToken
      //window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default apiAdmin;
