/**
 * Required Type
 */

interface Dog {
  name: string;
  age?: number;
  country?: string;
}

// const requiredDog = {
//   name: "모찌",
// };

const requiredDog: Required<Dog> = {
  name: "모찌",
  age: 2,
  country: "한국",
};
