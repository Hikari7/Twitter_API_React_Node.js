const express = require("express");
const { TwitterApi } = require("twitter-api-v2");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// const client = new TwitterApi({
//   appKey: process.env.TWITTER_CONSUMER_API_KEY,
//   appSecret: process.env.TWITTER_CONSUMER_API_SECRET,
//   accessToken: process.env.TWITTER_ACCESS_TOKEN,
//   accessSecret: process.env.TWITTER_ACCESS_SECRET,
// });
const twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);

const fetchTweets = async (userId) => {
  const tweetList = [];
  const user = await twitterClient.v2.userByUsername(userId);

  const userTimeline = await twitterClient.v2.userTimeline(user.data.id, {
    expansions: ["attachments.media_keys"],
    "media.fields": ["url"],
  });

  for await (const tweet of userTimeline) {
    const medias = userTimeline.includes.medias(tweet);
    tweetList.push({
      tweet,
      media: medias.length ? medias.map((m) => m.url) : [],
    });
  }

  // //   return tweetList.slice(0, 30);
  return tweetList;
};

app.use(cors());

// バックエンドのエンドポイントをフロントに持っていくんだけど
app.get("/tweets/:id", async (req, res) => {
  const data = await fetchTweets(req.params.id);
  res.json(data);
});

app.listen(PORT, () => {
  console.log("localhost 4000 is running");
});
