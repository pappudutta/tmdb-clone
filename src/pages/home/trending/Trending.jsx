import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import Carousel from "../../../component/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import SwitchTabs from "../../../component/switchTabs/SwitchTabs";

const Trending = () => {
  const tabs = ["day", "week"];
  const [endpoint, setEndpoint] = useState("week");
  const { data, loading, error } = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = index => {
    setEndpoint(tabs[index]);
  };

  return (
    <>
      <div className="carouselSection">
        <ContentWrapper>
          <span className="trendingTitle">Trending</span>
          <SwitchTabs tabs={tabs} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel
          data={data?.results}
          loading={loading}
          endpoint={endpoint}
          setEndpoint={setEndpoint}
        />
      </div>
    </>
  );
};

export default Trending;
