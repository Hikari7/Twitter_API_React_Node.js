import styled from "styled-components";

export const TweetsContainer = styled.ul`
  width: 80%;
  justify-content: center;
  margin: 0 auto;
  margin-top: 36px;

`

export const Tweet = styled.li`
  outline: solid 1px pink;
`;

const TweetItem = ({ index, item }) => {
  return (
    <TweetsContainer>
      <Tweet key={index}>{item.tweet.text}</Tweet>
    </TweetsContainer>
  );
};

export default TweetItem;
