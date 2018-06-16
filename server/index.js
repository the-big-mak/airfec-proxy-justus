const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));

// app.get('/reviews', (req, res) => {
//   axios.get('http://localhost:3001/reviews', {
//     params: {
//       id: req.query.id,
//     }
//   })
//     .then((response) => res.send(response.data))
//     .catch(error => console.error('no response in proxy', error))
// });

// app.get('/description', (req, res) => {
//   axios.get('http://localhost:3002/description', {
//     params: {
//       id: req.query.id,
//     }
//   })
//     .then((response) => res.send(response.data))
//     .catch(error => console.error('no response in proxy', error))
// });

app.get('/reviews/:id', (req, res) => {
  res.redirect(`http://0.0.0.0:3001/reviews/${req.params.id}`);
});
app.get('/description', (req, res) => {
  res.redirect(`http://localhost:3002/description/${req.params.id}`);
});
app.get('/Photos/:id', (req, res) => {
  res.redirect(`http://localhost:3003/Photos/${req.params.id}`);
});

app.get('/reservations/:id', (req, res) => {
  res.redirect(`http://localhost:3004/reservations/${req.params.id}`);
});

app.listen(port, () => {
  console.log('app is listening on', port);
});
