console.log('Starting server script...');
console.log('Hello from test script');
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // Use a free IP geolocation API (ip-api.com)
  const geoResponse = await fetch(`http://ip-api.com/json/${ip}`);
  const geoData = await geoResponse.json();

  console.log(`Visitor IP: ${ip}`);
  console.log(`Location: ${geoData.city}, ${geoData.regionName}, ${geoData.country}`);

  res.send('Thanks for visiting!');
});

app.listen(port, () => {
  console.log(`Tracking server running at http://localhost:${port}`);
});