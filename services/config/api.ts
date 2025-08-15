import axios from "axios";
const baseURL = process.env.API_BASE_URL || "https://689ec7b73fed484cf877f331.mockapi.io/api/v1";

const api = axios.create({
  baseURL,
  timeout: 10000,
});

console.log("Using API Base URL:", baseURL);


api.interceptors.request.use(
  async (config) => {
    const fullUrl = `${config.baseURL}${config.url}`;
    console.log("Making request to:", fullUrl);
    // Add authentication token if needed
    // const token = await getToken();
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response received:", response.status);
    return response;
  },
  (error) => {
    console.error("Response error:", error.response?.status, error.message);
    if (error.response?.status === 401) {
      console.error("Unauthorized: Please log in again.");
    }
    return Promise.reject(error);
  }
);

export default api;
