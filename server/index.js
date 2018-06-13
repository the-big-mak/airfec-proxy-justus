const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/rooms/:id', (req, res) => {
  axios.get('http://localhost:3001/rooms/:id/reviewBundle.js', {
    params: {
      ID: 5,
    }
  })
    .then((response) => {
      console.log('got response in proxy', response.data)
      //const data = JSON.parse(response.data);
      res.send(response.data);
    })
    .catch(error => console.error('no response in proxy', error))
});

app.listen(port, () => {
  console.log('app is listening on', port);
})
