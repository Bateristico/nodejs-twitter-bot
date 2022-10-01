const { getUserById, getFollowersById } = require('./api/twitter');
const convertToXlxs = require('./utils/json-to-xlsx');

const userId = '128325965'; //ColoColo internal id

async function callAPI() {
  const userInfo = await getUserById(userId);
  console.log('user info: ', userInfo);
  const followers = await getFollowersById(userId, null);
  console.log(followers);
  console.log('creating file...');
  await convertToXlxs(followers);
  //   console.log('Follower list total', followers);
  //   //   const cursor = followers.
  //   if (followers.meta.next_token) {
  //     const followers = await getFollowersById(userId, followers.meta.next_token);
  //   }
}

callAPI();
