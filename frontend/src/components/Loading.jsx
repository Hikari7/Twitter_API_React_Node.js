import React from "react";
import "../styles/main.css";

import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";


const Loading = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((index) => (
      <div className="card-skeleton" key={index}>
        <Skeleton count={5} />
      </div>
    ));
};

export default Loading;
