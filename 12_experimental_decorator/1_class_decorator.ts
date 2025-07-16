/**
 * Class Decorator
 */
@Test
@Frozen
@LogTest("PROD")
@ChangeClass
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function Test(constructor: Function) {
  console.log(constructor);
}

// class 위에 decorator 쓰면 함수 파라미터로 사용됨

function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

const yuJin = new Idol("안뉴진", 23);

console.log(Object.isFrozen(Object.getPrototypeOf(yuJin)));

// decorator factory
function LogTest(env: string) {
  return function (constructor: Function) {
    console.log(`${env} ${constructor}가 실행됐슴다`);
  };
}

console.log("------------------------------------");

const wonYoung = new Idol("원영", 23);
console.log(wonYoung);

// class에 decorator사용하면 선언을 읽을 때 한번 실행된다. 인스턴스화 할 땐 실행되지 않음.

function ChangeClass<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    groupName = "아이브";
    constructor(...params: any[]) {
      super(...params);
      console.log("constructor instantiated");
    }
  };
}
