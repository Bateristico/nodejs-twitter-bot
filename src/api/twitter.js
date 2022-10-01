require('dotenv').config();
const axios = require('axios');
const { BEARER_TOKEN } = process.env;

const baseUrl = 'https://api.twitter.com/2/users';
const config = {
  headers: { Authorization: `Bearer ${BEARER_TOKEN}` }
};

async function getUserById(userId) {
  try {
    const response = await axios.get(`${baseUrl}/${userId}`, config);
    console.log('API Response', response);
  } catch (error) {
    console.error(error);
  }
}

module.exports = getUserById;
