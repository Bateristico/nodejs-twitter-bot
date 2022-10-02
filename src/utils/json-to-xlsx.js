const XLSX = require('xlsx');

async function convertToXlxs(followers) {
  const worksheet = XLSX.utils.json_to_sheet(followers.data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, 'followers list');
  // generate buffer
  XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'buffer'
  });

  XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'binary'
  });

  XLSX.writeFile(workbook, 'followers list.xlsx');
}

module.exports = convertToXlxs;
