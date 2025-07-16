/**
 * Function Type
 */

type Mapper = (x: string) => string;

const runner = (callback: Mapper) => {
  return ["안유진", "장원영", "리즈"].map(callback);
};

// console.log(runner((x) => 1));
console.log(runner((x) => `아이브 멤버 ${x}`));

type MultiplyTwoNumbers = (a: number, b: number) => number;
const multiplyTwoNumbers: MultiplyTwoNumbers = (a, b) => {
  return a * b;
};

/**
 * interface로 함수 타입 선언하기
 */
interface IMultiplyTwoNumbers {
  (a: number, b: number): number;
}

const multiplyTwoNumbers2: IMultiplyTwoNumbers = (a, b) => {
  return a * b;
};
