# MyDramaList Scraper API

A simple Node.js scraper for MyDramaList, exposed as a web API.

## Installation

```bash
npm install
```

## Running the API

```bash
npm start
```

The API will be available at `http://localhost:3000`.

## API Endpoints

### Search

-   **URL:** `/search/:query`
-   **Method:** `GET`
-   **Description:** Searches for a drama on MyDramaList.
-   **URL Params:** `query=[string]` (required) - The search query.
-   **Example:** `/search/The%20Untamed`
-   **Success Response:**
    -   **Code:** 200
    -   **Content:**
        ```json
        [
          {
            "title": "The Untamed",
            "year": "2019",
            "url": "https://mydramalist.com/28723-the-untamed"
          }
        ]
        ```