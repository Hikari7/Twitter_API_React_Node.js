import React from "react";

const Tweet = ({ index, tweet }) => {
  return (
    <li key={index} className="tweet">
      <a href={tweet.entities.urls[0].url}>{tweet.entities.urls[0].url}</a>
    </li>
  );
};

export default Tweet;
