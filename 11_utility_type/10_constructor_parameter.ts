/**
 * Constructor Parameter
 */

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type ConstructorParams = ConstructorParameters<typeof Idol>;
