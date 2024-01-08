const express = require('express');

const stringsRouter = express.Router();

const { sayHello, uppercase, lowercase, firstCharacters } = require('../lib/src/strings');

stringsRouter.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

stringsRouter.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

stringsRouter.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

stringsRouter.get('/strings/first-characters/:string', (req, res) => {
  const length = req.query.length || 1;
  const inputString = req.params.string;

  res.status(200).json({ result: firstCharacters(inputString, length) });
});

module.exports = stringsRouter;
