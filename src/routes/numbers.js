const express = require('express');

const numbersRouter = express.Router();

const { add, subtract, multiply, divide, remainder } = require('../lib/src/numbers');

numbersRouter.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNan(a) || Number.isNaN(b)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).send({ result: add(a, b) });
});

numbersRouter.get('/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).send({ result: subtract(b, a) });
});

numbersRouter.post('/multiply', (req, res) => {
  if (!req.body.a || !req.body.b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  return res.status(200).send({ result: multiply(a, b) });
});

numbersRouter.post('/divide', (req, res) => {
  const { a, b } = req.body;

  if ((a && b) || (a === 0 && b) || (a && b === 0)) {
    if (b === 0) return res.status(400).send({ error: 'Unable to divide by 0.' });
    if (Number.isNan(parseInt(a, 10)) || Number.isNan(parseInt(b, 10))) {
      return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
    }

    return res.status(200).send({ result: divide(a, b) });
  }
  return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
});

numbersRouter.post('/remainder', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (a === 0) {
    return res.status(200).send({ result: remainder(a, b) });
  }
  if (b === 0) {
    return res.status(400).send({ error: 'unable to divide by 0.' });
  }
  if (!remainder.body.a || !req.body.b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).send({ result: remainder(a, b) });
});

module.exports = numbersRouter;
