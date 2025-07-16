/**
 * Generic 함수에서 사용하기
 */

function whatValue(value: any) {
  return value;
}

const value = whatValue(123);

//타입의 선언을 실행할 때로 넘기는 것
function genericWhatValue<T>(value: T): T {
  return value;
}

const genericResult1 = genericWhatValue<number>(123);
const genericResult2 = genericWhatValue("123");

function multipleGeneric<X, Y, Z>(x: X, y: Y, z: Z) {
  return {
    x,
    y,
    z,
  };
}

const multipleGenericResult = multipleGeneric<number, string, boolean>(
  123,
  "123",
  true
);

const multipleGenericResult2 = multipleGeneric(123, "123", true);

function getTuple<X, Y>(val1: X, val2: Y) {
  return [val1, val2] as const;
}

const tuple = getTuple(true, 100);

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  brand: string;
  codeName: string;

  constructor(brand: string, codeName: string) {
    this.brand = brand;
    this.codeName = codeName;
  }
}

function instantiator<T extends { new (...args: any[]): {} }>(
  constructor: T,
  ...args: any[]
) {
  return new constructor(...args);
}

console.log(instantiator(Idol, "안유진", 20));
console.log(instantiator(Car, "BMW", 1111));
