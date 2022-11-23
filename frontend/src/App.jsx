// import { Client } from "twitter-api-sdk";
import logo from "./assets/twitter.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Client } from "twitter-api-sdk";

function App() {
  const [tweets, setTweets] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => getTweets(), [query]);

  function getTweets() {
    axios
      .get("api/tweets", {
        params: {
          q: query,
        },
      })
      .then((response) => {
        console.log(tweets);
        setTweets(response.data.statuses);
      })
      .catch((error) => console.log(error.message));
  }

  function handleClick() {
    console.log("clicked!");
  }

  function listTweet() {
    return (
      <ul className="tweets">
        {tweets.map((tweet, index) => {
          // console.log(tweet.entities.urls);
          console.log(tweets);
          return (
            <li key={index} className="tweet">
              {tweet.text}
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
