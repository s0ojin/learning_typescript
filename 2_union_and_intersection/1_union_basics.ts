/**
 * Union Basics
 *
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법 중 하나이다.
 * OR의 개념
 * /

type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = "아이브";
stringOrBooleanType = true;

// stringOrBooleanType = undefined;

type StrBoolNullType = string | boolean | null;

type StateTypes = "DONE" | "LOADING" | "ERROR";

let state: StateTypes = "DONE";
state = "LOADING";
// state = "INIT";

/**
 *  리스트의 유니언
 */

//string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let stringListOrBooleanList: StringListOrBooleanList = ["아이브", "블랙핑크"];
let booleanListOrBooleanList: StringListOrBooleanList = [true, false];
// stringListOrBooleanList = [true, "아이유"];

type StringOrNumberList = (string | number)[];

let stringOrNumberList: StringOrNumberList = ["아이브", 1, 2];

/**
 * Interface로 사용하는 union
 */

interface Animal {
  name: string;
  age: number;
}

interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
  name: "박수진",
  age: 29,
  address: "대한민국",
};

console.log(animalOrHuman); // 자동으로 Human으로 추론

animalOrHuman = {
  name: "오리",
  age: 9,
};

console.log(animalOrHuman);

console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// console.log(animalOrHuman.address);
// Property 'address' does not exist on type 'Animal'.ts(2339)

let animalOrHuman2:
  | {
      name: string;
      age: number;
    }
  | {
      name: string;
      age: number;
      address: string;
    } = {
  name: "박수진",
  age: 29,
  address: "대한민국",
};

console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
console.log(animalOrHuman2.address);

animalOrHuman2 = {
  name: "오리",
  age: 9,
};

console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
// console.log(animalOrHuman2.address);
// Property 'address' does not exist on type '{ name: string; age: number; }'.ts(2339)

// => 선언해주는게 에러 파악이 더 쉬움

/**
 * 서로 관계가 없는 유니언을 선언하면
 */

type Person = {
  name: string;
  age: number;
};

type Cat = {
  breed: string;
  country: string;
};

type PersonOrCat = Person | Cat;

// 유니언은 합집합의 개념
// 한개의 타입을 충족한 뒤에는 다른 속성이 오는건 괜찮다.
// 근데 사람에서 한개, 고양이에서 한 개 이렇게는 안된다.
const personOrCat: PersonOrCat = {
  name: "코드팩토리",
  age: 32,
  breed: "Yorkshire Terrier",
  country: "영국",
};
