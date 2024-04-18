import axios from "axios";

const AxiosService = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Access environment variable directly
    headers: {
      "Content-Type": "application/json",
    },
  });

// AxiosService.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export default AxiosService;