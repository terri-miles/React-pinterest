import axios from "axios";

const apiRequests = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  withCredentials: true,
});

export default apiRequests;
