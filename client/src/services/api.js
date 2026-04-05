import axios from 'axios';

const STORAGE_KEY = 'berea_admin_auth';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (stored?.token) {
      config.headers.Authorization = `Bearer ${stored.token}`;
    }
  } catch {
    // no-op
  }

  return config;
});

export default api;
