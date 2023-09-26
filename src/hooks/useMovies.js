import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useMovies = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    apiClient
      .get(url)
      .then(res => {
        setData(res.data.results);
      })
      .catch(err => {
        setError(err);
      });
  }, [url]);

  return { data, loading, error };
};

export default useMovies;
