import React, { useEffect } from "react";
import HeroBanner from "./homeBanner/HeroBanner";
import getDataFromApi from "../../services/api-client";
import { useDispatch } from "react-redux";
import { getApiConfiguration } from "../../features/homeSlice";

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
    <div>
      <HeroBanner />
    </div>
  );
};

export default Home;
