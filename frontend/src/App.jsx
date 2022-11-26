import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import logo from "./assets/twitter.svg";
import TweetItem from "./components/TweetItem";
import Button from "./components/Button";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header, HeaderContent } from "./styles/Header";
import {
  Container,
  ContainerTitle,
  ContainerSearch,
  FormInput,
  Buttons,
} from "./styles/Container";
import Loading from "./components/Loading";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [tweets, setTweets] = useState([]);
  const [query, setQuery] = useState("100DaysOfCode");
  const ref = useRef();

  // useEffect(() => getTweets("hk_Vancouver"), [query]);
  //FIFAWorldCup
  useEffect(() => getTweets("hk_Vancouver"), [query]);

  function getTweets(userId) {
    axios
      .get(`/api/tweets/search/recent/${userId}`, {
        params: {
          query: "100DaysOfCode",
          max_results: 10,
        },
      })
      .then(({ data }) => {
        setTweets(data);
      })
      .catch((error) => console.log(error.message));
  }

  console.log(tweets.length);

  function listTweet() {
    return (
      <ul className="tweets">
        {tweets.length > 0 ? (
          tweets?.map((item, index) => {
            return (
              <>
                <TweetItem item={item} index={index} />
              </>
            );
          })
        ) : tweets.error ? (
          tweets.error
        ) : (
          <Loading cards={4} />
        )}
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
