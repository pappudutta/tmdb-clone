import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SearchResults from "./pages/searchResults/SearchResults";
import Details from "./pages/details/Details";
import NotFound from "./pages/404/NotFound";
import { useDispatch } from "react-redux";
import getDataFromApi from "./services/api-client";
import { getGenres } from "./features/homeSlice";

const App = () => {
  const dispatch = useDispatch();

  const fetchGenreData = async () => {
    const promises = [];
    const genreEndpoints = ["movie", "tv"];
    const allGenres = {};

    genreEndpoints.forEach(endpoint => {
      return promises.push(getDataFromApi(`/genre/${endpoint}/list`));
    });
    const data = await Promise.all(promises);

    data.map(item => {
      const { genres } = item.data;
      return genres.map(item => {
        allGenres[item.id] = item;
      });
    });
    dispatch(getGenres(allGenres));
  };

  useEffect(() => {
    fetchGenreData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/:media_type/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
