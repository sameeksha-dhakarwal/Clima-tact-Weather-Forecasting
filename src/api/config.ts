const key = import.meta.env.VITE_OPENWEATHER_API_KEY;

if (!key) {
  throw new Error("Missing VITE_OPENWEATHER_API_KEY. Create a .env file in the project root and restart Vite.");
}

export const API_CONFIG = {
  BASE_URL: "https://api.openweathermap.org/data/2.5",
  GEO_URL: "https://api.openweathermap.org/geo/1.0",
  API_KEY: key,
  DEFAULT_PARAMS: {
    units: "metric",
    appid: key,
  },
};
