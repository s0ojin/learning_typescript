/**
 * Defining function
 */

// function printName(name) {
//   console.log(name);
// }

function printName(name: string) {
  console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
  return `${person1}과 ${person2}는 사귀고 있습니다.`;
}

console.log(returnTwoCouples("아이유", "오리"));
// returnTwoCouples(0,1);
// returnTwoCouples("아이유");
// returnTwoCouples("아이유", "오리", "안유진");

/**
 * Optional Parameter
 */

function multiplyOrReturn(x: number, y?: number) {
  if (y) {
    return x * y;
  }
  return x;
}

console.log(multiplyOrReturn(10, 20));
console.log(multiplyOrReturn(10));

function multiplyOrReturn2(x: number, y: number = 10) {
  return x * y;
}

console.log(multiplyOrReturn2(10, 20));
console.log(multiplyOrReturn2(10));

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args: string[]) {
  return args.map((x) => `너무좋아 ${x}`);
}

console.log(getInfiniteParameters("아이유", "오리", "안유진"));
// console.log(getInfiniteParameters(1, 2, 3));

/**
 * Return Type
 */
function addTwoNumbers(a: number, b: number) {
  return a + b;
}

addTwoNumbers(1, 2);

function addTwoNumbers2() {
  return Math.random() > 0.5 ? 10 : "ㅎㅎ";
}

addTwoNumbers2();

function subtractTwoNumbers(a: number, b: number): number {
  //   return "이게 반환이 되나";
  return a - b;
}

subtractTwoNumbers(1, 2);

const subtractTwoNumbersArrow = (a: number, b: number): number => {
  return a - b;
};

/**
 * 특수 반환 타입
 * void / never
 */

function doNotReturn(): void {
  console.log("doNotReturn");
  return undefined;
}

function neverEndingLoop(): never {
  while (true) {}
}

function throwError() {
  throw Error();
}
