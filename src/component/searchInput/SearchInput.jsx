import React from "react";
import "./style.scss";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchQueryHandler = e => {
    navigate(`/search/${query}`);
    setQuery("");
  };

  return (
    <div className="searchInput">
      <input
        type="text"
        id="searchInput"
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for a Movie, Tv Show..."
      />
      <button id="searchBtn" onClick={e => searchQueryHandler(e.target.id)}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
