const express = require("express");
const { TwitterApi } = require("twitter-api-v2");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());

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
  return tweetList;
};

app.get("/api/tweets/:id", async (req, res) => {
  const data = await fetchTweets(req.params.id);
  res.json(data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("PORT 4000 is running");
});
