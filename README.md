# MyDramaList Scraper

A simple Node.js scraper for MyDramaList.

## Installation

```bash
npm install
```

## Usage

```javascript
const mdl = require('./index');

async function run() {
  const results = await mdl.search('The Untamed');
  console.log(results);
}

run();
```
