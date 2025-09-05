const express = require('express');
const { search } = require('./index');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('MyDramaList Scraper API is running!');
});

app.get('/search/:query', async (req, res) => {
  const { query } = req.params;
  try {
    const results = await search(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during the search.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
