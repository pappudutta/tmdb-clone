import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../lazyLoading/Img";
import "./style.scss";

const Banner = () => {
  const [background, setBackground] = useState(null);
  const { data, loading } = useFetch("/movie/upcoming");

  const { url } = useSelector(state => state.home);
  const { secure_base_url, backdrop_sizes } = url;

  useEffect(() => {
    const bg = data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  return (
    <>
      <div className="heroBanner">
        {background && backdrop_sizes && (
          <div className="backdropImage">
            <Img
              src={secure_base_url + backdrop_sizes[1] + background}
              alt=""
            />
          </div>
        )}
        <div className="opacityLayer"></div>
        <div className="heroBannerContent">
          <h1 className="title">Welcome</h1>
          <p className="subtitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
