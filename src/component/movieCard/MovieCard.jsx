import React, { useState } from "react";
import Img from "../lazyLoading/Img";
import FallBackPoster from "../../assets/no-poster.png";

import "./style.scss";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const MovieCard = ({ data }) => {
  const { url } = useSelector(state => state.home);
  const { secure_base_url, poster_sizes } = url;

  const posterImg = secure_base_url + poster_sizes[3];

  return (
    <div className="movieCard">
      <div className="posterBlock">
        <Img
          className="posterImg"
          src={data.poster_path ? posterImg + data.poster_path : FallBackPoster}
        />

        <div className="ratingGenre">
          <CircleRating rating={data.vote_average.toFixed(1)} />
          <Genres data={data.genre_ids} />
        </div>
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {dayjs(data.release_date || data.first_air_date).format(
            "YYYY MMM, DD"
          )}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
