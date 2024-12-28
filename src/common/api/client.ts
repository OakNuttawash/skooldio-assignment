import axios from "axios";

const api = axios.create({
  baseURL: "https://tcas-assets.skooldio.com/tmp/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
