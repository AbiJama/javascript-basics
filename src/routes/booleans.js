const express = require('express');

const booleanRouter = express.Router();

// eslint-disable-next-line prettier/prettier
const {
  negate,
  truthiness,
  isOdd,
  startsWith,
} = require('../lib/src/booleans');

booleanRouter.post('/negate', (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
});

booleanRouter.post('/truthiness', (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
});

booleanRouter.get('/is-odd/:number', (req, res) => {
  const number = parseInt(req.params.number, 10);
  if (Number.isNan(number)) return res.status(400).send({ error: 'Parameters must be a number.' });

  return res.status(200).send({ result: isOdd(number) });
});

booleanRouter.get('/:str/starts-with/:char', (req, res) => {
  const { str, char } = req.params;
  if (char.length !== 1)
    return res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  return res.status(200).send({ result: startsWith(char, str) });
});

module.exports = booleanRouter;
