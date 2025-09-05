const mdl = require('./index');

async function run() {
  // You can change the search query to whatever you want to search for
  const results = await mdl.search('The Untamed');
  console.log(results);
}

run();
