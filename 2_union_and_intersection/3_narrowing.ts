/**
 * Narrowing
 *
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게되는걸 의미함.
 */

// 유니온 타립으로 선언했지만, string을 할당하면 이후 사용할때 string으로 추론함.
// let numberOrString: number | string;
// numberOrString;

/**
 * Narrowing의 종류
 *
 * 1) Assignment Narrowing
 * 2) Typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator narrowing
 * 6) instanceof narrowing
 * 7) dis crimated union narrowing
 * 8) exhaustiveness checking
 */

// (1) Assignment Narrowing
// 특정 값을 할당하여 내로잉
let numbOrString: number | string = "아이유";
numbOrString.toString();

// (2) Typeof Narrowing
numbOrString = Math.random() > 0.5 ? 1 : "아이유";
if (typeof numbOrString === "string") {
  numbOrString;
} else {
  numbOrString;
}

// (3) Truthiness Narrowing
let nullOrString: null | string[] =
  Math.random() > 0.5 ? null : ["아이유", "안유진"];

if (nullOrString) {
  nullOrString;
} else {
  nullOrString;
}

// (4) Equality Narrowing
let numbOrString2: number | string = Math.random() > 0.5 ? 1 : "아이유";
let stringOrBool2: string | boolean = Math.random() > 0.5 ? "아이브" : true;

if (numbOrString2 === stringOrBool2) {
  numbOrString2;
  stringOrBool2;
} else {
  numbOrString2;
  stringOrBool2;
}

let NumberOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 1 : Math.random() > 0.5 ? "아이유" : null;

if (typeof NumberOrStringOrNull === "number") {
  NumberOrStringOrNull; // number
} else {
  NumberOrStringOrNull; // string | null
}

// (5) in operator narrowing
interface Human {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  type: string;
}

let human: Human = {
  name: "안유진",
  age: 23,
};

let dog: Dog = {
  name: "오리",
  type: "Yorkshire Terrier",
};

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

if ("type" in humanOrDog) {
  humanOrDog;
} else {
  humanOrDog;
}

// (6) instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : "아이유";

if (dateOrString instanceof Date) {
  dateOrString;
} else {
  dateOrString;
}

// (7) discriminated union narrowing
interface Animal {
  type: "dog" | "human";
  height?: number;
  breed?: string;
}

let animal: Animal =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 170,
      }
    : {
        type: "dog",
        breed: "Yorkshire Terrier",
      };

// optional때문에 undefined가 들어감
if (animal.type === "human") {
  animal.height;
} else {
  animal.breed;
  animal.height;
}

interface Human2 {
  type: "human";
  height: number;
}

interface Dog2 {
  type: "dog";
  breed: string;
}

interface Fish2 {
  type: "fish";
  length: number;
}

type HumanOrDog2 = Human2 | Dog2 | Fish2;

let humanOrDog2: HumanOrDog2 =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 170,
      }
    : Math.random() > 0.5
    ? {
        type: "dog",
        breed: "Yorkshire Terrier",
      }
    : {
        type: "fish",
        length: 10,
      };

if (humanOrDog2.type === "human") {
  humanOrDog2;
} else {
  humanOrDog2;
}

// (8) exhaustiveness checking
// human아니면 dog이므로 나머지는 never
switch (humanOrDog2.type) {
  case "human":
    humanOrDog2.height;
    break;
  case "dog":
    humanOrDog2.breed;
    break;
  default:
    humanOrDog2;

  // Fish 타입이 더 추가된 상태. 일부러 오류를 발생시키려고 함
  // const _check: never = humanOrDog2;
}
