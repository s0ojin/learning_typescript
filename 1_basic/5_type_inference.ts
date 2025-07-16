/**
 * 타입 추론
 */

let stringType = "hello";
let booleanType = true;
let numberType = 30;

booleanType = false;
// booleanType = "false";

// const는 재할당이 안되니까 리터럴 스트링으로 추론
const constStringType = "const string";
const constBooleanType = true;

let yuJin = {
  name: "안유진",
  age: 2003,
};

const yuJin2 = {
  name: "안유진",
  age: 2003,
};

yuJin2.name = "코드팩토리";
console.log(yuJin2);

// 캐스팅을 통해 구체화할 수 있음
const yuJin3 = {
  name: "안유진" as const,
  age: 2003 as const,
};

// yuJin3.name = "박수진";

console.log(yuJin3.name);

/**
 * Array
 *
 */

let numbers = [1, 2, 3, 4, 5];
let numberAndString = [1, 2, "3", "4"];

// numbers.push('6');
const number = numbers[0];
const nos = numberAndString[0];
// error안남
const nos2 = numberAndString[100];

/**
 * tuple
 */
const twoNumbers = [1, 3] as const;

// twoNumbers[0] = 10;
// twoNumbers.push(10);
const first = twoNumbers[0];

// 튜플은 정확하게 값을 인식하기 때문에 없는 값 가져올 수 없음
// const second = twoNumbers[10];
