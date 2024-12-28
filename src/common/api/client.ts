import axios from "axios";

const api = axios.create({
  baseURL: "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
