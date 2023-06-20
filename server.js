const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

app.use(cors());

app.listen(8000, () => {
  console.log('Server is up and running on localhost:8000');
});

app.get('/weather', async (req, res) => {
  try {
    console.log('Fetching weather data');
    const { lat, lon } = req.query;
    const { data } = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
    res.json(data);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Something went wrong' });
  }
});
