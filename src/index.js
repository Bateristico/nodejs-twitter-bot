const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();

const { APP_KEY, APP_SECRET_KEY, ACCESS_TOKEN, ACCESS_TOKEN_SECRET } = process.env;

const client = new TwitterApi({
  appKey: APP_KEY,
  appSecret: APP_SECRET_KEY,
  accessToken: ACCESS_TOKEN,
  accessSecret: ACCESS_TOKEN_SECRET
});

const rwClient = client.readWrite;

module.exports = rwClient;
