import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ContentWrapper from "../../component/contentWrapper/ContentWrapper";
import getDataFromApi from "../../services/api-client";

import "./style.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import SpinnerLoader from "../../component/spinnerLoader/SpinnerLoader";
import MovieCard from "../../component/movieCard/MovieCard";

const SearchResults = () => {
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    getDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(res => {
      setData(res.data);
      setPageNum(prev => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextData = () => {
    setLoading(true);
    getDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(res => {
      setData(res.data);
      setPageNum(prev => prev + 1);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <div className="searchResultPage">
      {loading && <SpinnerLoader />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">{`Search ${
                data?.results?.length > 1 ? "results" : "result"
              } of ${query}`}</div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextData}
                hasMore={pageNum <= data?.total_page}
                loader={<SpinnerLoader />}
              >
                {data?.results?.map((item, index) => {
                  if (item.media_type === "person") return;
                  return <MovieCard key={index} data={item} />;
                })}
              </InfiniteScroll>
            </>
          ) : (
            <>
              <span className="resultsNotFound">
                {" "}
                Sorry, results not found...
              </span>
            </>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResults;
