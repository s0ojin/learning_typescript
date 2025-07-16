/**
 * Tuple
 */

let iveTopMembers: string[] = ["안유진", "장원영", "레이"];

// 순서, 갯수 강제
// let numberAndStringTuple: [number, string] = ["안유진", 23];
let numberAndStringTuple: [number, string] = [23, "안유진"];

// 갯수 강제하지않고 잘 들어가는모습
// 근데 빌드할때 에러안나면 JS에서는 튜플이 존재하지않으므로 그대로 작동하게 됨.
numberAndStringTuple.push("아이유");
console.log(numberAndStringTuple);

let unmodifiableTuple: readonly [number, string] = [23, "안유진"];

// readonly 튜플은 수정불가
// unmodifiableTuple.push("아이유");

/**
 * Tuple 유추하기
 */
let actresses = ["김고은", "김태리", "박소담"];
let actressesTuple = ["김고은", "김태리", "박소담"] as const;
const actressesTuple2 = ["김고은", "김태리", "박소담"] as const;

let stringArray: string[] = [
  ...actressesTuple,
  ...actressesTuple2,
  //   ...[1, 2, 3],
];

/**
 * Named Tuple
 */
const namedTuple: [name: string, age: number] = ["박수진", 29];

/**
 * Assigning Tuple to Tuple
 *
 * Tuple은 같은 타입끼리만 할당이 가능하다
 */
const tuple1: [string, string] = ["안유진", "장원영"];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tuple2;

let tuple5: [string, string] = tuple1;

/**
 * Tuple과 Array의 관계
 * Tuple은 Array의 특수한 형태
 */

let ive: [string, string] = ["안유진", "장원영"];
let stringArr: string[] = ive;
// let ive2: [string, string] = stringArr;

/**
 * Multi Dimension Tuple
 */

const tuple2D: [string, number][] = [
  ["박수진", 29],
  ["안유진", 23],
  ["장원영", 21],
  //   [23, "안유진"],
];
