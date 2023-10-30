
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3001; // Choose any port you prefer

// Middleware to handle CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Proxy route
app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://git.io/fjaqJ');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});


