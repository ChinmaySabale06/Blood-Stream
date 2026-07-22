import axios from 'axios';

// Single axios instance for the whole app — base URL comes from an env var
// instead of being hardcoded per-component, so builds work outside local dev.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

export default api;
