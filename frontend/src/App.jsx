// import { Client } from "twitter-api-sdk";
import logo from "./assets/twitter.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "../config/axios.config";

function App() {
  const [tweets, setTweets] = useState([]);
  const [query, setQuery] = useState("100DaysOfCode");

  console.log(tweets);

  useEffect(() => getTweets("hk_Vancouver"), [query]);
  // console.log(query);npm
  function getTweets(userId) {
    axios
      // .get(`tweets/search/recent/${query}`)
      .get(`/tweets/${userId}`)
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
        {tweets?.map((tweet, index) => {
          // console.log(tweet.entities.urls);
          return (
            <li key={index} className="tweet">
              {tweet.tweet.text}
              {/* {tweet.entities.urls} */}
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
