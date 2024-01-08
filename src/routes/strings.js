const express = require('express');

const router = express.Router();

const { sayHello, uppercase, lowercase, firstCharacters } = require('../lib/src/strings');

router.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

router.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

router.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

router.get('/strings/first-characters/:string', (req, res) => {
  const length = req.query.length || 1;
  const inputString = req.params.string;

  res.status(200).json({ result: firstCharacters(inputString, length) });
});

module.exports = router;
