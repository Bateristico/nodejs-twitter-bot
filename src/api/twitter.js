require('dotenv').config();
const axios = require('axios');
const { BEARER_TOKEN } = process.env;

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
 * @returns {Object}
 */
async function getFollowersById(userId) {
  try {
    const response = await axios.get(`${baseUrl}/${userId}/followers`, config);
    return response.data.data;
  } catch (error) {
    console.error('there was an error fetching', error);
  }
}

module.exports = { getUserById, getFollowersById };
