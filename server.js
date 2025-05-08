require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_SCOPE = process.env.GITHUB_SCOPE || 'repo,user';

// Proxy for requesting device code
app.post('/api/github/device/code', async (req, res) => {
  try {
    const response = await axios.post(
      'https://github.com/login/device/code',
      new URLSearchParams({
        client_id: GITHUB_CLIENT_ID,
        scope: GITHUB_SCOPE,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// Proxy for polling access token
app.post('/api/github/device/token', async (req, res) => {
  const { device_code } = req.body;
  try {
    const response = await axios.post(
      'https://github.com/login/oauth/access_token',
      new URLSearchParams({
        client_id: GITHUB_CLIENT_ID,
        device_code,
        grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' } }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});