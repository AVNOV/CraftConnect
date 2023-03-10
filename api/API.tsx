import axios from "axios";

const baseURL = `https://api-craftconnect.onrender.com/`;

const API = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  async (config) => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      config.headers = {
        Authorization: `Bearer ${access_token}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default API;
