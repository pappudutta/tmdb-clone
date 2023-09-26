import axios from "axios";
const TMDB_KEY = import.meta.env.VITE_APP_TOKEN_TMDB;

const headers = {
  Authorization: "bearer" + TMDB_KEY,
};

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers,
});
