/**
 * Problems with array in js
 */

const numbers = [1, "2", 3, "4", 5];

let strings: string[] = ["1", "2", "3"];

// strings.push(1);

let stringsOrNumbersArr: (string | number)[] = ["1", "2", "3", 4];

let stringArrNumberArr: string[] | number[] = [1, 2, 3, 4];
stringArrNumberArr = ["1", "2", "3"];

let stringOrNumberArr: string | number[] = [1, 2, 3];

stringOrNumberArr = "3";

let boolsArr = [true, false, true];

boolsArr.push(false);
// boolsArr.push(1);

const OnlyString = ["1", "2", "3"];
const onlyNumber = [1, 2, 3];

for (let i = 0; i < OnlyString.length; i++) {
  let item = OnlyString[i];
}

for (let item of onlyNumber) {
}

let number = onlyNumber[0];
let number2 = onlyNumber[9999]; // 런타임에 undefined가 나오겠지만 타입스크립트에서는 number로 추론
