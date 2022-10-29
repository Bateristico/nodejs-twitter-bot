require('dotenv').config();
const axios = require('axios');

const timeout = 1000 * 60 * 5; // timeout to send the message 5 min

const { BEARER_TOKEN } = process.env;
const MAX_RESULTS = 1000;

const message = {
  text: `¡Hola ${userName}}! ¿Qué tal? Soy Constanza, estudiante de Ciencia Política. \nEstoy realizando un estudio de opinión de los hinchas de fútbol, y quería pedirte por favor si puedes contestar la siguiente encuesta: \nhttps://forms.gle/sp6o6ZMhvhwim5eb7 \nDudas a tesis.cipol@gmail.com'`
};
const polls = [
  'https://forms.gle/sp6o6ZMhvhwim5eb7',
  'https://forms.gle/EmDe75UL9wDCojjo8',
  'https://forms.gle/NbvA9ogyRccqZ6WD6'
];

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
  let fetchUrl;
  console.log(`function called for user ${userId} and cursor: ${cursor}`);

  if (!cursor) {
    fetchUrl = `${baseUrl}/${userId}/followers?max_results=${MAX_RESULTS}`;
  } else {
    fetchUrl = `${baseUrl}/${userId}/followers?max_results=${MAX_RESULTS}&pagination_token=${cursor}`;
  }

  try {
    console.log(`fetch to ${fetchUrl} and pagination ${cursor}`);
    const response = await axios.get(fetchUrl, config);
    return response.data;
  } catch (error) {
    console.error('there was an error fetching', error);
  }
}

/**
 * Post a tweet and tags a user
 */
async function postTweet(followers) {
  console.log('post tweet for', followers);
}

/**
 * Sends a DM to a given twitter account name
 */
async function sendDM() {
  console.log('calling sendDM function');
  const screen_name = 'wateristico';
  const obj = {
    screen_name,
    text: 'Automated DM test'
  };

  T.post('direct_messages/new', obj)
    .catch(err => {
      console.error('error', err.stack);
    })
    .then(result => {
      console.log(`Message sent successfully To  ${screen_name}  💪💪`);
    });
}
module.exports = { getFollowersById, sendDM, postTweet };
