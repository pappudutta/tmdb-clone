import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_KEY = import.meta.env.VITE_APP_TOKEN_TMDB;

const headers = {
  Authorization: "bearer " + TMDB_KEY,
};

const getDataFromApi = async (url, params) => {
  try {
    const data = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log("error from client: ", error);
  }
};

export default getDataFromApi;
