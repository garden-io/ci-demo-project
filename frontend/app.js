const express = require('express');
const request = require('request-promise')
const app = express();

// Unless configured otherwise, the hostname is simply the service name
const backendEndpoint = `http://backend/hello-go`;

app.get('/hello-frontend', (req, res) => res.send('Hello from fromtend'));

app.get('/call-backend', (req, res) => {
  // Query the backend and return the response
  request.get(backendEndpoint)
    .then(message => {
      message = `Go says: '${message}'`
      res.json({
        message,
      })
    })
    .catch(err => {
      res.statusCode = 500
      res.json({
        error: err,
        message: "Unable to reach service at " + backendEndpoint,
      })
    });
});

module.exports = { app }
