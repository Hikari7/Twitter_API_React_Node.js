import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import logo from "./assets/twitter.svg";
import "./App.css";
import TweetItem from "./components/TweetItem";
import Button from "./components/Button";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header, HeaderContent } from "./styles/Header";
import {
  Container,
  ContainerTitle,
  ContainerSearch,
  FormInput,
  Buttons
} from "./styles/Container";

function App() {
  const [tweets, setTweets] = useState([]);
  const [query, setQuery] = useState("100DaysOfCode");
  const ref = useRef();

  useEffect(() => getTweets("manghnani_11"), [query]);

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
    <>
      <GlobalStyles />
      <Header>
        <HeaderContent>
          <img src={logo} className="logo" alt="twitter" />
          <h1 className="title">Seach Tweets App</h1>
        </HeaderContent>
      </Header>
      <Container>
        <ContainerTitle Container_title>
          Get your favorite user Tweets!
        </ContainerTitle>
        <ContainerSearch>
          <FormInput
            placeholder=" Search User..."
            type="text"
            name="search"
          ></FormInput>
          <label className="label"></label>
          <Buttons>
            <Button label="Search" onClick={search} />
            <Button label="Clear" onClick={clear} />
          </Buttons>
        </ContainerSearch>
        <div>{listTweet()}</div>
      </Container>
    </>
  );
}

export default App;
