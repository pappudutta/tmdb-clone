import React, { useState } from "react";
import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../component/switchTabs/SwitchTabs";
import Carousel from "../../../component/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Popular = () => {
  const tabs = ["tv", "movie"];
  const [endpoint, setEndpoint] = useState("tv");
  const { data, loading, error } = useFetch(`/${endpoint}/popular`);

  const onTabChange = index => {
    setEndpoint(tabs[index]);
  };

  return (
    <>
      <div className="carouselSection">
        <ContentWrapper>
          <span className="trendingTitle">Popular</span>
          <SwitchTabs tabs={tabs} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
      </div>
    </>
  );
};

export default Popular;
