import React, { useState, useEffect } from "react";
import axios from "axios";

import logo from "./assets/twitter.svg";
import "./App.css";


function App() {
  const [tweets, setTweets] = useState([]);
  const [query, setQuery] = useState("100DaysOfCode");

  useEffect(() => getTweets("hk_Vancouver"), [query]);
  function getTweets(userId) {
    axios
      .get(`/api/tweets/${userId}`)
      .then(({ data }) => {
        setTweets(data);
      })
      .catch((error) => console.log(error.message));
  }

  function handleClick() {
    console.log("clicked!");
  }

  function listTweet() {
    return (
      <ul className="tweets">
        {tweets?.map((item, index) => {
          return (
            <li key={index} className="tweet">
              {item.tweet.text}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="App">
      <img src={logo} className="logo" alt="twitter" onClick={handleClick} />
      <div className="container">{listTweet()}</div>
    </div>
  );
}

export default App;
