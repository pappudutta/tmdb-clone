import React from "react";
import { Dna } from "react-loader-spinner";
import "./style.scss";

const SpinnerLoader = () => {
  return (
    <div className="loading">
      <Dna
        height="100"
        width="100"
        radius="9"
        color="green"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default SpinnerLoader;
