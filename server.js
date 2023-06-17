const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.listen(8000, () => {
  console.log('Server is up and running on localhost:8000');
});

app.get('/weather', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=34.6834&lon=-82.8374&appid=074990688e9ad4b322131d4cbccce9a9');
    res.json(data);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Something went wrong' });
  }
});
