const express = require('express');

const arraysRouter = express.Router();

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/src/arrays');

arraysRouter.post('/element-at-index/:index', (req, res) => {
  const { array } = req.body;
  const { index } = req.params;
  res.status(200).send({ result: getNthElement(index, array) });
});

arraysRouter.post('/to-string', (req, res) => {
  const { array } = req.body;
  res.status(200).send({ result: arrayToCSVString(array) });
});

arraysRouter.post('/append', (req, res) => {
  const { array, value } = req.body;
  res.status(200).send({ result: addToArray2(value, array) });
});

arraysRouter.post('/starts-with-vowel', (req, res) => {
  const { array } = req.body;
  res.status(200).send({ result: elementsStartingWithAVowel(array) });
});

arraysRouter.post('/remove-element', (req, res) => {
  const { array } = req.body;
  const index = req.query.index ? parseInt(req.query.index, 10) : 0;

  res.status(200).send({ result: removeNthElement2(index, array) });
});

module.exports = arraysRouter;
