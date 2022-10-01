const json2xlsx = require('node-json-xlsx');
const fs = require('fs');

async function convertToXlxs(followers) {
  const xlsx = json2xlsx(followers.data);
  console.log('xls', xlsx);
  try {
    // const file = fs.writeFileSync('data.xlsx', xlsx, 'binary');
    return file;
  } catch (error) {
    console.log('error creating the file', error);
  }
  console.log('create file', file);
}

module.exports = convertToXlxs;
