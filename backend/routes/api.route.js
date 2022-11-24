require("dotenv").config();

const express = require("express");
const { TwitterApi } = require("twitter-api-v2");

const app = express();
const PORT = process.env.PORT || 3000;

const client = new TwitterApi({
  appKey: process.env.TWITTER_CONSUMER_API_KEY,
  appSecret: process.env.TWITTER_CONSUMER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

const fetchTweets = async (twitterHandle) => {
  const tweetList = [];
  const user = await client.v2.userByUsername(twitterHandle);
  const userTimeline = await client.v2.userTimeline(user.data.id, {
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

  //   return tweetList.slice(0, 30);
  return tweetList;
};

//バックエンドのエンドポイントをフロントに持っていくんだけど
app.get("/tweets/:id", async (req, res) => {
  const handleUser = req.params.id;
  res.json({ tw: await fetchTweets(handleUser) });
});

app.listen(PORT);
