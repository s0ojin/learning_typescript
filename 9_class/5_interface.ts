/**
 * Interface
 */
interface Animal {
  name: string;
  age: number;
  jump(): string;
}

class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  jump(): string {
    return `${this.name}가 점프합니다.`;
  }

  // 초과 정의 가능하지만, Animal에 정의되어있는건 무조건 정의해야
  dance() {}
}

const ori: any = new Dog("오리", 2);

function instanceOfAnimal(animal: any): animal is Animal {
  return "jump" in animal;
}

if (instanceOfAnimal(ori)) {
  ori;
}

/**
 * 다중 인터페이스 구현
 */

interface Pet {
  legsCount: number;
  bark(): void;
}

class Cat implements Animal, Pet {
  // Animal
  name: string;
  age: number;
  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  // Animal
  jump(): string {
    return `${this.name}가 점프합니다.`;
  }

  // Pet
  bark(): void {
    console.log(`${this.name}가 야옹합니다.`);
  }
}

type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
  // Animal
  name: string;
  age: number;
  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  // Animal
  jump(): string {
    return `${this.name}가 점프합니다.`;
  }

  // Pet
  bark(): void {
    console.log(`${this.name}가 야옹합니다.`);
  }
}

interface WrongInterface1 {
  name: string;
}

interface WrongInterface2 {
  name: number;
}

// class Person implements WrongInterface1, WrongInterface2 {
//   name: string;
//   name2: number;
//   name3: string | number;
// }

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// constructor 타입 정의
interface IdolConstructor {
  new (name: string, age: number): Idol;
}


function createIdol(constructor: IdolConstructor, name:string, age:number) {
    return new constructor(name, age)
    // return new Idol(name, age)
}


console.log(createIdol(Idol, "아이유", 32));