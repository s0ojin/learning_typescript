/**
 * Readonly Property
 */

class Idol {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const yujin = new Idol("안유진", 23);

// yujin.name = "안유진2";
yujin.age = 24;
