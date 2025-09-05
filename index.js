const axios = require('axios');
const cheerio = require('cheerio');

const baseUrl = 'https://mydramalist.com';

async function search(query) {
  try {
    const searchUrl = `${baseUrl}/search?q=${encodeURIComponent(query)}`;
    const { data } = await axios.get(searchUrl);
    const $ = cheerio.load(data);

    const results = [];
    $('div.box').each((i, element) => {
      const title = $(element).find('h6.text-primary a').text().trim();
      const url = $(element).find('h6.text-primary a').attr('href');
      const year = $(element).find('span.text-muted').text().trim().match(/\d{4}/);

      if (title && url) {
        results.push({
          title,
          year: year ? year[0] : null,
          url: `${baseUrl}${url}`,
        });
      }
    });

    return results;
  } catch (error) {
    console.error('Error during search:', error);
    return [];
  }
}

module.exports = { search };
