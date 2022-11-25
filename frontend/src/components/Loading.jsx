import React from "react";
import "../styles/main.css";

import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// const Loading = <Skeleton wrapper={Box} count={5} />;

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
