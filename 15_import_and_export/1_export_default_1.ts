/**
 * Export
 */

class IdolModel {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const number = 12;

// export default interface ICat {
//   name: string;
//   breed: string;
// }

export default {
  IdolModel,
  number,
};
