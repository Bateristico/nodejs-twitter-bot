const { getUserById, getFollowersById, sendDM } = require('./api/twitter');
const convertToXlxs = require('./utils/json-to-xlsx');

// const userId = '128325965'; //ColoColo internal id
const userId = '29855980'; // UdeChile internal id
const cursor = 'L3AF8NNV10DHGZZZ'; //'RVK95FIIH8LHGZZZ';
let followers;

async function callAPI(cursor) {
  followers = await getFollowersById(userId, cursor);
  console.log(followers);
  console.log('creating file...');
  await convertToXlxs(followers);
  if (followers.meta.next_token) {
    cursor = followers.meta.next_token;
    await callAPI(cursor);
  } else {
    console.log('no more tokens');
  }
}

async function generateExcel() {}

callAPI(cursor);
