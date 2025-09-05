const axios = require('axios');
const cheerio = require('cheerio');

const baseUrl = 'https://mydramalist.com';

async function search(query) {
  try {
    const searchUrl = `${baseUrl}/search?q=${encodeURIComponent(query)}`;
    const { data } = await axios.get(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36'
      }
    });
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
