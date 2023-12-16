const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/src/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const length = req.query.length || 1;
  const inputString = req.params.string;

  res.status(200).json({ result: firstCharacters(inputString, length) });
});

module.exports = app;
