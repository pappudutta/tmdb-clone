import React from "react";
import "./style.scss";
import { useState } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const searchQueryHandler = e => {};

  return (
    <div className="searchInput">
      <input
        type="text"
        id="searchInput"
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for a Movie, Tv Show..."
      />
      <button id="searchBtn" onClick={e => console.log(query)}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
