import axios from "axios";
import { STORAGE_KEYS } from "../utils/enums";

const apiAdmin = axios.create({
  baseURL: `http://localhost:5723/api/`,
  headers: {
    "Content-Type": "application/json",
  },
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
    //const url = response.config.url;

    //setLocalStorageToken(token);
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      //(`unauthorized :)`);
      //localStorage.removeItem("persist:root");
      //removeLocalStorageToken
      //window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default apiAdmin;
