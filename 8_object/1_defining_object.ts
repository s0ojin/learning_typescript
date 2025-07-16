/**
 * Object
 */
const codefactory = {
  name: "코드팩토리",
  age: 20,
};

interface IPerson {
  name: string;
  age: number;
}

type TPerson = {
  name: string;
  age: number;
};

const iPerson: IPerson = {
  name: "유인나",
  age: 29,
};

const tPerson: TPerson = {
  name: "수진",
  age: 29,
};
