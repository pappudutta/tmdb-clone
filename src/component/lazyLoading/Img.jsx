import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Img = ({ src, alt, className }) => {
  return <LazyLoadImage src={src} className={className || ""} alt={alt} />;
};

export default Img;
