const { getFollowersById, postTweet } = require('./api/twitter');
const convertToXlxs = require('./utils/json-to-xlsx');

const userId = '128325965'; //ColoColo internal id
// const userId = '29855980'; // UdeChile internal id
const cursor = null;
let followers;

async function callAPI(cursor) {
  followers = await getFollowersById(userId, cursor);
  console.log('Creating post...');
  // await convertToXlxs(followers);
  await postTweet(followers.data);
  if (followers.meta.next_token) {
    cursor = followers.meta.next_token;
    await callAPI(cursor);
  } else {
    console.log('no more tokens');
  }
}

callAPI(cursor);
