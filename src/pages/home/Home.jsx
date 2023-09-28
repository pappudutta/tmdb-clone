import React, { useEffect } from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import getDataFromApi from "../../services/api-client";
import { useDispatch } from "react-redux";
import { getApiConfiguration } from "../../features/homeSlice";

import "./style.scss";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  const dispatch = useDispatch();
  const fetchApiConfig = () => {
    getDataFromApi("/configuration").then(res => {
      const url = res.data.images;
      dispatch(getApiConfiguration(url));
    });
  };

  useEffect(() => {
    fetchApiConfig();
  }, []);

  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
