const router = require("express").Router();
const Twitter = require("twitter");
// const { TwitterApi } = require("twitter-api-v2");

// const twitterClient = new TwitterApi(import.meta.env.VITE_BEARER_TOKEN);
//const v2Client = client.v2;

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_API_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_API_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET,
});

//To get general tweets
router.get("/tweets", async (req, res, next) => {
  try {
    const query = req.query.hashtag;
    const tweets = await client.get("search/tweets.json", {
      q: "100DaysOfCode",
      // q: "hk_Vancouver",
      // include_entities: false,
      result_type: "popular",
      count: 10,
    });
    res.send(tweets);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

// this route gets the hikari's tweet
router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});ls

module.exports = router;
