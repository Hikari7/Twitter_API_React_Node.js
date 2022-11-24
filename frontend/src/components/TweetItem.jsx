const TweetItem = ({ index, item }) => {
  return (
    <ul className="tweets">
      <li key={index} className="tweet">
        {item.tweet.text}
      </li>
    </ul>
  );
};

export default TweetItem;
