import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const Genres = ({ data }) => {
  const { genre } = useSelector(state => state.home);

  return (
    <div className="genres">
      {data?.map((g, i) => {
        if (!genre[g].name) return;
        return (
          <div className="genre" key={g} onClick={e => console.log(e.target)}>
            {genre[g].name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
