/**
 * Statement and Expression
 */

//Statement (문장)
function addTwoNumbers(a: number, b: number) {
  return a + b;
}

//Expression (표현식)
const addTwoNumbersExp = (a: number, b: number) => {
  return a + b;
};

/**
 * Statement
 */
function add(a: number, b: number): number {
  return a + b;
}
function sub(a: number, b: number): number {
  return a - b;
}
function multi(a: number, b: number): number {
  return a * b;
}
function div(a: number, b: number): number {
  return a / b;
}

/**
 * Expression
 */
type CalculationType = (a: number, b: number) => number;
const add2: CalculationType = function (x, y) {
  return x + y;
};

const sub2: CalculationType = function (x, y) {
  return x - y;
};

const multi2: CalculationType = function (x, y) {
  return x * y;
};

const div2: CalculationType = function (x, y) {
  return x / y;
};
