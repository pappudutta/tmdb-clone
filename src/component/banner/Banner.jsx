import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
const Banner = () => {
  const [background, setBackground] = useState(null);
  const { data, loading } = useFetch("/movie/upcoming");

  const { secure_base_url, backdrop_sizes } = useSelector(
    state => state.home.url
  );

  useEffect(() => {
    const bg = data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  return (
    <>
      {secure_base_url && (
        <div>
          {/* {console.log(secure_base_url + backdrop_sizes[] + background)} */}
          <img src={secure_base_url + backdrop_sizes[2] + background} alt="" />
        </div>
      )}
    </>
  );
};

export default Banner;
