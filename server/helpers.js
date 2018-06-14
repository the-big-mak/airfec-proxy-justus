const axios = require('axios');

module.exports = {
  getService: (req, res) => {
    axios.get('http://localhost:3001/reviews', {
      params: {
        ID: req.query.ID,
      }
    })
      .then((response) => res.send(response.data))
      .catch(error => console.error(error));
  }
};
