require('dotenv').config();
const axios = require('axios');
const { BEARER_TOKEN } = process.env;
const MAX_RESULTS = 1000;

const baseUrl = 'https://api.twitter.com/2/users';
const config = {
  headers: { Authorization: `Bearer ${BEARER_TOKEN}` }
};

/**
 * gets the twiter info of a user by it's id
 * @param {string} userId account userId
 * @returns {Object}
 */
async function getUserById(userId) {
  try {
    const response = await axios.get(`${baseUrl}/${userId}`, config);
    return response.data.data;
  } catch (error) {
    console.error('there was an error fetching', error);
  }
}
/**
 * gets the followers for a given user
 * @param {string} userId account userId
 * @param {string} cursor pagination token for recursive calls
 * @returns {Object}
 */
async function getFollowersById(userId, cursor) {
  let followerList;
  let fetchUrl;
  console.log(`function called for user ${userId} and cursor: ${cursor}`);

  if (!cursor) {
    fetchUrl = `${baseUrl}/${userId}/followers?max_results=${MAX_RESULTS}`;
  } else {
    fetchUrl = `${baseUrl}/${userId}/followers?max_results=${MAX_RESULTS}&pagination_token=${cursor}`;
  }

  try {
    const response = await axios.get(fetchUrl, config);
    followerList = { ...followerList, ...response.data };
  } catch (error) {
    console.error('there was an error fetching', error);
  }

  //   console.log(followerList);

  //   // checks if there is a pagination token
  //   const paginationToken = response.data.meta.next_token;
  //   if (paginationToken) {
  //     cursor = paginationToken;
  //     console.log('RECURSIVE CALL with cursor', cursor);
  //     getFollowersById(userId, cursor);
  //   }

  return followerList;
}

module.exports = { getUserById, getFollowersById };
