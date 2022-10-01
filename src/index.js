const { getUserById, getFollowersById } = require('./api/twitter');

const userId = '128325965'; //ColoColo internal id

async function callAPI() {
  const userInfo = await getUserById(userId);
  console.log('user info: ', userInfo);
  const followers = await getFollowersById(userId);
  console.log('followers', followers);
}

callAPI();
