import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import logo from "./assets/twitter.svg";
import "./App.css";
import TweetItem from "./components/TweetItem";
import Button from "./components/Button";

function App() {
  const [tweets, setTweets] = useState([]);
  const [query, setQuery] = useState("100DaysOfCode");
  const ref = useRef();

  useEffect(() => getTweets("manghnani_11"), [query]);

  //useEffect(() => getTweets(searchUser), [query]);

  // const getUsers = (e) => {
  //   e.preventDefault();
  //   setSearchUser(ref.current.value);
  //   console.log(searchUser);
  // };

  function getTweets(userId) {
    axios
      .get(`/api/tweets/${userId}`, {
        params: { text: "100DaysOfCode" },
      })
      .then(({ data }) => {
        setTweets(data);
      })
      .catch((error) => console.log(error.message));
  }

  // const randomTweets = tweets[Math.floor(Math.random() * 11)];

  function listTweet() {
    return (
      <ul className="tweets">
        {tweets?.map((item, index) => {
          return (
            <>
              <TweetItem item={item} index={index} />
            </>
          );
        })}
      </ul>
    );
  }
  console.log(tweets);

  const search = (e) => {
    e.preventDefault();
    console.log("Searching");
    console.log(tweets);
    listTweet();
  };

  const clear = (e) => {
    e.preventDefault();
    console.log("Clear");
    // ref.current.value = "";
  };

  return (
    <div className="App">
      <img src={logo} className="logo" alt="twitter" />
      <div className="container">
        <form className="form">
          <label className="label">
            <span className="span">Get user favorite user Tweets!</span>
            <br />
            <input placeholder=" Search User..." type="text" name="search" />
          </label>
          <Button label="Search" onClick={search} />
          <Button label="Clear" onClick={clear} />
        </form>
        <div>{listTweet()}</div>
      </div>
    </div>
  );
}

export default App;
