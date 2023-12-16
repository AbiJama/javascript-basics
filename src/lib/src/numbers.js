const add = (a, b) => {
  return a + b;
};

const subtract = (b, a) => {
  return b - a;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const power = (a, b) => {
  return a ** b;
};

const round = (a, b, c) => {
  return Math.round(a, b, c);
}

const roundUp = (a, b, c) => {
  return Math.ceil(a, b, c);
}

const roundDown = (a, b, c) => {
  return Math.floor(a, b, c);
}

const absolute = (a, b, c) => {
  return Math.abs(a, b, c);
}

const quotient = (a, b) => {
  return Math.trunc(a / b);
}

const remainder = (a, b) => {
  return a % b;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
}
