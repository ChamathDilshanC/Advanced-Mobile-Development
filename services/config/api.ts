import axios from "axios";
const baseURL =
  process.env.EXPO_PUBLIC_API_BASE_URL ||
  process.env.API_BASE_URL ||
  "https://689ec7b73fed484cf877f331.mockapi.io/api/v1/";


const api = axios.create({
  baseURL,
  timeout: 10000,
});

api.interceptors.request.use(
  async (config) => {
    // Add authentication token if needed
    // const token = await getToken();
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
    }
    return Promise.reject(error);
  }
);

export default api;
