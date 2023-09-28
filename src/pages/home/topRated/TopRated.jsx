import React, { useState } from "react";
import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../component/switchTabs/SwitchTabs";
import Carousel from "../../../component/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const TopRated = () => {
  const tabs = ["movie", "tv"];
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading, error } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = index => {
    setEndpoint(tabs[index]);
  };

  return (
    <>
      <div className="carouselSection">
        <ContentWrapper>
          <span className="trendingTitle">Top Rated</span>
          <SwitchTabs tabs={tabs} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} endpoint={endpoint} loading={loading} />
      </div>
    </>
  );
};

export default TopRated;
