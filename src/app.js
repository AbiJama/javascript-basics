const express = require('express');

const app = express();

app.use(express.json());

const stringsR = require('./routes/strings');
const numbersR = require('./routes/numbers');
const booleanR = require('./routes/booleans');
const arraysR = require('./routes/arrays');

app.use('/strings', stringsR);
app.use('/numbers', numbersR);
app.use('/booleans', booleanR);
app.use('/arrays', arraysR);

module.exports = app;
