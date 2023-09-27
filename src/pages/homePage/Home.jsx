import React, { useEffect } from "react";
import HeroBanner from "./homeBanner/HeroBanner";
import getDataFromApi from "../../services/api-client";
import { useDispatch } from "react-redux";
import { getApiConfiguration } from "../../features/homeSlice";

import "./style.scss";

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
      <h1>hero</h1>
      <div className="skeletonItem ">
        <div className="posterBlock skeleton">
          1
          <div className="textBlock">
            1<div className="title skeleton">Skeleton</div>
            <div className="date skeleton">1</div>
          </div>
        </div>
      </div>
      <HeroBanner />
    </div>
  );
};

export default Home;
