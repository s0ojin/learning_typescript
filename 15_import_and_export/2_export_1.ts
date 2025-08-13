/**
 * Export
 */

export class IdolModel {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export const rose = new IdolModel("로제", 25);
export const number = 9999;
export interface ICat {
  name: string;
  breed: string;
}

export default {
  name: "박박박",
  age: 29,
};
