import React, { useRef } from "react";

import Img from "../lazyLoading/Img";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import CircleRating from "../circleRating/CircleRating";

import { BiSolidChevronRight, BiSolidChevronLeft } from "react-icons/bi";
import FallBackImg from "../../assets/no-poster.png";

import "./style.scss";

import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import Genres from "../genres/Genres";

const Carousel = ({ data, loading }) => {
  const { url } = useSelector(state => state.home);

  const carouselContainer = useRef();

  const handleNavigation = direction => {
    const containers = carouselContainer.current;

    const scrollAmount =
      direction === "left"
        ? containers.scrollLeft - (containers.offsetWidth + 20)
        : containers.scrollLeft + (containers.offsetWidth + 20);

    containers.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const { secure_base_url, poster_sizes } = url;

  const navigate = useNavigate();

  let ImgUrl;
  if (secure_base_url && poster_sizes) {
    ImgUrl = secure_base_url + poster_sizes[2]; //change image quality update this [0++] < 3
  }

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton">
          <div className="textBlock">
            <div className="title skeleton"></div>
            <div className="date skeleton"></div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="carousel">
      <ContentWrapper>
        <BiSolidChevronLeft
          className="carouselNav left"
          onClick={() => handleNavigation("left")}
        />
        <BiSolidChevronRight
          className="carouselNav right"
          onClick={() => handleNavigation("right")}
        />

        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map(item => (
              <div
                key={item.id}
                className="carouselItem"
                onClick={() => {
                  navigate(`/${item.media_type}/${item.id}`);
                }}
              >
                <div className="posterBlock">
                  <Img
                    className="lazyLoadImg"
                    src={ImgUrl ? ImgUrl + item.poster_path : FallBackImg}
                    alt=""
                  />
                  <CircleRating rating={item.vote_average.toFixed(1)} />
                  <Genres id={item.genre_ids} />
                </div>

                <div className="textBlock">
                  <span className="title">{item?.title || item?.name}</span>
                  <span className="date">
                    {dayjs(item.release_date).format("YYYY MMM, DD")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
