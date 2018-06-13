const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/reviews', (req, res) => {

});

app.listen(port, () => {
  console.log('app is listening on', port);
})
