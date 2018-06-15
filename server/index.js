const express = require('express');
const path = require('path');
//const helper = require('./helpers');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

app.use(cors());

app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));


//app.get('/reviews', helper.getService);

app.get('/reviews', (req, res) => {
  axios.get('http://localhost:3001/reviews', {
    params: {
      id: req.query.id,
    }
  })
    .then((response) => res.send(response.data))
    .catch(error => console.error('no response in proxy', error))
});

app.get('/description', (req, res) => {
  axios.get('http://localhost:3002/description', {
    params: {
      id: req.query.id,
    }
  })
    .then((response) => {
      res.send(response.data)
    })
    .catch(error => console.error('no response in proxy', error))
});

app.get('/Photos/:id', (req, res) => {
  res.redirect(`http://localhost:3003/Photos/${req.params.id}`);
});

app.get('/reservations/:id', (req, res) => {
  res.redirect(`http://localhost:3004/reservations/${req.params.id}`);
});

// app.get('/description', (req, res) => {
//   res.redirect(`http://localhost:3002/description/${req.params.id}`);
// });

app.listen(port, () => {
  console.log('app is listening on', port);
});
