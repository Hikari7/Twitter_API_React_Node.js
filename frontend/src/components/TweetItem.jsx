import styled from "styled-components";
import "../styles/main.css";
import { IconContext } from "react-icons";
import { AiOutlineRetweet } from "react-icons/ai";
import { SlBubble } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { FiShare } from "react-icons/fi";

export const Tweet = styled.div`
  margin-top: 8px;
  border-radius: 2px;
  padding: 24px;
  text-align: center;
  border: 1px #aab8c2 solid;
`;

export const Icons = styled.div`
  width: 60%;
  margin: 16px auto;
  color: #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const TweetText = styled.div`
  min-height: 80%;
  color: #14171a;
  text-align: left;
`;

const TweetItem = ({ index, item }) => {
  return (
    <Tweet key={index}>
      <IconContext.Provider
        value={{
          size: "15px",
          marginLeft: "6px",
          cursor: "pointer",
        }}
      >
        <TweetText>{item.tweet.text}</TweetText>
        <Icons>
          <SlBubble />
          <AiOutlineRetweet />
          <FcLike />
          <FiShare />
        </Icons>
      </IconContext.Provider>
    </Tweet>
  );
};

export default TweetItem;
