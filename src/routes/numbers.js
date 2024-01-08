const express = require('express');

const router = express.Router();

const { add, subtract, multiply, divide, remainder } = require('../lib/src/numbers');

router.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).send({ result: add(a, b) });
});

router.get('/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).send({ result: subtract(a, b) });
});

router.post('/multiply', (req, res) => {
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

router.post('/divide', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (a === 0) {
    return res.status(200).send({ result: divide(a, b) });
  }
  if (b === 0) {
    return res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if (!req.body.a || !req.body.b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  return res.status(200).send({ result: divide(a, b) });
});

router.post('/remainder', (req, res) => {
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

module.exports = router;
