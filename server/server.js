const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true, // Allows the server to accept credentials in cross-origin requests
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));

app.get('/proxy', async (req, res) => {
  try {
    const response = await axios.get('https://howtoabroad.com/find-study-programmes-in-germany/');
    const $ = cheerio.load(response.data);

    // Remove ads - example
    $('iframe[src*="ads"], .ad-class, .ad-container').remove();

    res.send($.html());
  } catch (error) {
    res.status(500).send('Error fetching content');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});