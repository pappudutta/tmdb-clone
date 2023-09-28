import React from "react";
import "./style.scss";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating">
      <CircularProgressbar
        text={rating}
        value={rating}
        maxValue={10}
        styles={buildStyles({
          textSize: "34px",
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "#1ed5a9",
        })}
      />
    </div>
  );
};

export default CircleRating;
